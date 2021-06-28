import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "gray",
    // width: "100%",
    // position: "absolute",
    // bottom: 0,
    marginTop: "4rem",
    height: "2rem",
    color: "#ebf6f7",
  },
  typography: {
    paddingTop: "0.8rem",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" align="center" className={classes.typography}>
        Copyright © 2021 コノヘンデヒトヤスミ All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
