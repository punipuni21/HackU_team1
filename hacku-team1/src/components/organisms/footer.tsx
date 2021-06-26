import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    color: "#ebf6f7",
    backgroundColor: "#0f2350",
    width: "100%",
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.footer}>Footer</div>;
};

export default Footer;