import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { FormControl } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { Container } from "@material-ui/core";
// import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// import Card from '@material-ui/core/Card';
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    float: "right",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Sidebar = ({ cuisineHandler, ratingHandler, priceHandler }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>

      <div style={{ margin: "5rem 0 0 3rem" }}>
        <FormControl>
          <FormLabel>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "black",
                // position: "absolute",
                // top:"12px"
              }}
            >
              Format
            </span>
          </FormLabel>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => cuisineHandler(e)}
                    value="North Indian"
                  />
                }
                label="North Indian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => cuisineHandler(e)}
                    value="South Indian"
                  />
                }
                label="South Indian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => cuisineHandler(e)}
                    value="Chinese"
                  />
                }
                label="Chinese"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => cuisineHandler(e)}
                    value="Biryani"
                  />
                }
                label="Biryani"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={(e) => ratingHandler(e)} value="3" />
                }
                label="3+"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={(e) => priceHandler(e)} value="300" />
                }
                label="Price-300+"
              />
            </FormGroup>
          </Collapse>
        </FormControl>
      </div>
    </Container>
  );
};
export default Sidebar;
