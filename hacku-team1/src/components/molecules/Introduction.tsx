import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextLabel from "../atoms/TextLabel";
import Button from "../atoms/Button";
import { Grid } from "@material-ui/core";
import { GoogleLoginButton } from "react-social-login-buttons";

import firebase from "../../firebase/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    introduction: {
      width: "100%",
      // height: "404px ",
      textAlign: "center",
      position: "relative",
      left: "0%",
      right: "0%",
      top: "12.68%",
      bottom: "55.18%",
      background: "#BBDEFB",
      paddingBottom: "5%",
    },
    textLabel: {
      // position: "relative",
      // width: "730px",
      // height: "56px",
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
  })
);

const Introduction: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.introduction}>
      <TextLabel
        classname={classes.textLabel}
        text="ここはアプリの紹介"
      ></TextLabel>
    </div>
  );
};

export default Introduction;
