import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";

const HeaderLayout = () => {
  const [res_data, setRes_Data] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //   console.log(data)

        setRes_Data(data);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h6">MOST FREQUENTLY ORDERED</Typography>
      <Grid container>
        {res_data
          .filter((data, id) => id < 4)
          .map((data) => (
            <Grid item key={data.id} xs={6} md={3} lg={3}>
              <Header data={data} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default HeaderLayout;
