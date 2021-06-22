import React from "react";
import Image from "../atoms/Image";
import TextLabel from "../atoms/TextLabel";
import Content from "../molecules/Content";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ContentList: React.FC = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Content
            classname={"hoge"}
            src="./logo192.png"
            alt={"画像"}
            text={"画像だよ"}
          ></Content>
          <Content
            classname={"hoge"}
            src="./logo192.png"
            alt={"画像"}
            text={"画像だよ"}
          ></Content>
          <Content
            classname={"hoge"}
            src="./logo192.png"
            alt={"画像"}
            text={"画像だよ"}
          ></Content>
          <Content
            classname={"hoge"}
            src="./logo192.png"
            alt={"画像"}
            text={"画像だよ"}
          ></Content>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentList;
