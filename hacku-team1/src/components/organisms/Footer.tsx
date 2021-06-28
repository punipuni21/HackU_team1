import React from "react";
import { Box, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: { bottom: 0, top: "auto" },
  toolbar: { justifyContent: "center", minHeight: "48px" },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar
      color="primary"
      className={classes.appBar}
      component="footer"
      position="absolute"
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="body2" align="center">
          Copyright © 2021 コノヘンデヒトヤスミ All Rights Reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
