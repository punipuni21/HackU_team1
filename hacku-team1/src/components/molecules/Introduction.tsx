import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextLabel from "../atoms/TextLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    introduction: {
      width: "100%",
      textAlign: "center",
      background: "#BBDEFB",
      padding: "2em 0",
    },
    textLabel: {
      left: "calc(50% - 730px/2)",
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
