import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
// import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: "25px",
  },
  media: {
    height: 170,
  },
});

const price = "199";

const ResCard = ({ data }) => {
  const classes = useStyles();

  const [colorr, setColorr] = useState("green");
  // const [resRating, setResRating] = useState("4.5");

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea key={data.name}>
          <CardMedia
            className={classes.media}
            image={data.img_url}
            title={data.name}
          />

          <CardContent>
            <Typography variant="h6" component="h3">
              {data.name}
            </Typography>

            <Typography gutterBottom variant="body2">
              <span style={{ color: "red" }}>₹ {data.price}/-</span>{" "}
              <span>per head &#8226; 10 Dishes</span>
            </Typography>

            <Typography variant="body2" color="textsecondary" component="p">
              <span
                style={{
                  backgroundColor: colorr,
                  padding: "1px 8px",
                  color: "white",
                }}
              >
                &#9734; {data.rating}
              </span>
              <span> 213 ratings</span>
              <span style={{ float: "right" }}>
                {data.veg && (
                  <img
                    src="https://www.pikpng.com/pngl/m/210-2108039_veg-logo-png-veg-symbol-clipart.png"
                    alt=""
                    style={{ width: "20px", margin: "2px" }}
                  />
                )}
                {data.non_veg && (
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/nonveg-sign-565376.png"
                    alt=""
                    style={{ width: "20px" }}
                  />
                )}
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ResCard;
