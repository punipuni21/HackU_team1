import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextLabel from "../atoms/TextLabel";
import Button from "../atoms/Button";
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

const Introduction: React.FC = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleClickButton = () => {
    alert("押した");
  };
  return (
    <>
      <Container fixed>
        <TextLabel
          classname="description"
          text="ここはアプリの紹介"
        ></TextLabel>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Button
                name="Sign Up"
                classname="sign-up"
                onClick={handleClickButton}
              ></Button>
              <Button
                name="Sign In"
                classname="sign-in"
                onClick={handleClickButton}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <TextLabel
        classname="description"
        text="みんなに消化されたコンテンツ"
      ></TextLabel>
    </>
  );
};

export default Introduction;
