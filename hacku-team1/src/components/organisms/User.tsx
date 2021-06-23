import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import UserIcon from "../molecules/UserIcon";
import UserName from "../molecules/UserName";

const useStyles = makeStyles({
  divider: {
    marginBottom: "20px",
  },
});

interface Props {
  name: string;
  icon: string;
}

const User = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={3}>
          <UserIcon name={props.name} icon={props.icon} />
        </Grid>
        <Grid item xs={9}>
          <UserName name={props.name} />
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="middle" />
    </div>
  );
};

export default User;
