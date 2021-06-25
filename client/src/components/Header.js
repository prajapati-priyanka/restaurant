import React from "react";
import Card from "@material-ui/core/Card";

import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 170,
  },
});

const Header = ({ data }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.img_url}
            title={data.name}
          />

          <CardContent>
            <Typography variant="h6" component="h3">
              {data.name}
            </Typography>

            <Typography variant="body2">
              {data.location}
              <span
                style={{ float: "right", color: "red", fontWeight: "bold" }}
              >
                RE-ORDER
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Header;
