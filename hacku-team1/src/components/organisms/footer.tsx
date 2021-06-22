import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    color: "#ebf6f7",
    backgroundColor: "#0f2350",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.footer}>Footer</div>;
};

export default Footer;