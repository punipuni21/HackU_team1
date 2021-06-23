import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextLabel from "../atoms/TextLabel";
import Button from "../atoms/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    introduction: {
      width: "100%",
      // height: "404px ",
      position: "relative",
      left: "0%",
      right: "0%",
      top: "12.68%",
      bottom: "55.18%",
      background: "#BBDEFB",
      paddingBottom: "5%",
    },
    textLabel: {
      position: "relative",
      width: "730px",
      height: "56px",
      left: "calc(50% - 730px/2)",
      top: "0px",
      /* H2 - bold 44 (56, 0.2px) */
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "44px",
      lineHeight: "56px",
      /* identical to box height, or 127% */
      textAlign: "center",
      letterSpacing: "0.2px",
      /* Light / Black */
      color: "black",
      /* Inside Auto Layout */
      flex: "none",
      order: 0,
      flexGrow: 0,
      margin: "0",
      padding: "3% 0",
    },
    SignUp: {
      /* Auto Layout */
      display: "inherit",
      flexDirection: "row",
      alignItems: "center",
      padding: "12px 18px",

      position: "static",
      width: "91px",
      height: "42px",
      left: "calc(50% - 91px/2 - 54px)",
      top: "0px",

      /* Accent / Default */
      background: "#3C64B1",
      color: "white",
      fontWeight: "bold",
      borderColor: "#3C64B1",

      /* Inside Auto Layout */
      flex: "none",
      order: 0,
      flexGrow: 0,
      margin: "0px 24px",
    },
    SignIn: {
      position: "inherit",
      width: "91px",
      height: "42px",
      left: "calc(50% - 91px/2 - 54px)",
      right: "18px",
      top: "calc(50% - 18px/2)",

      /* Button - bold 14 (18, 0.3px) */

      fontFamily: "Mulish",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "18px",

      /* identical to box height, or 129% */
      // display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.3px",

      /* Accent / Default */
      color: "#3C64B1",
      borderColor: "#3C64B1",
      background: "#BBDEFB",

      /* Inside Auto Layout */
      flex: "none",
      order: 0,
      flexGrow: 0,
      margin: "0px 24px",
    },
  })
);

const Introduction: React.FC = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleClickButton = () => {
    alert("押した");
  };
  return (
    <div>
      <div className={classes.introduction}>
        <TextLabel
          classname={classes.textLabel}
          text="ここはアプリの紹介"
        ></TextLabel>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              <Button
                name="Sign Up"
                classname={classes.SignUp}
                onClick={handleClickButton}
              ></Button>
              <Button
                name="Sign In"
                classname={classes.SignIn}
                onClick={handleClickButton}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Introduction;
