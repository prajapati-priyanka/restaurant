import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
// import Main from "./Main";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ResCard from "./ResCard";

const LayoutBar = styled.div`
  height: "18vh";
  marginbottom: "5px";
`;
const Wrapper = styled.div`
  padding: 1rem 0 0 1.4rem;
  width: 100%;
`;

const StyledFilter = styled.h2`
  margin-left: 2rem;
  font-size: 25px;
  margin-top: 0;
  display: inline-block;
`;
const StyledReset = styled.p`
  color: gray;
  padding-left: 4.5rem;
  cursor: pointer;

  display: inline-block;
`;

const Main = () => {
  //   const classes = useStyles();
  const [res_data, setRes_Data] = useState([]);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);

        setRes_Data(data);

        setMainData(data);
      });
  }, []);

  const cuisineHandler = (e) => {
    e.preventDefault();

    if (e.target.checked) {
      const newData = res_data.filter((item) =>
        item.cuisines.includes(e.target.value)
      );

      setRes_Data(newData);
    } else {
      setRes_Data(mainData);
    }
  };

  const ratingHandler = (e) => {
    e.preventDefault();

    if (e.target.checked) {
      const newRating = res_data.filter(
        (item) => item.rating >= e.target.value
      );

      setRes_Data(newRating);
    } else {
      setRes_Data(mainData);
    }
  };
  const priceHandler = (e) => {
    e.preventDefault();

    if (e.target.checked) {
      const newPrice = res_data.filter((item) => item.price >= e.target.value);

      setRes_Data(newPrice);
    } else {
      setRes_Data(mainData);
    }
  };

  return (
    <Container>
      <LayoutBar>
        <Wrapper>
          <StyledFilter>FILTERS</StyledFilter>
          <StyledReset>Reset all</StyledReset>
        </Wrapper>
      </LayoutBar>

      <hr style={{ opacity: "0.2" }} />

      <Grid container>
        <Grid item xs={1} md={3}>
          <Sidebar
            cuisineHandler={cuisineHandler}
            ratingHandler={ratingHandler}
            priceHandler={priceHandler}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {res_data.map((data) => (
              <Grid item key={data.id} xs={6} md={6} lg={4}>
                <ResCard data={data} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
