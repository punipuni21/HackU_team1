import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { db } from "../../firebase/firebase";

import UserIcon from "../molecules/UserIcon";
import UserName from "../molecules/UserName";

const useStyles = makeStyles({
  divider: {
    marginBottom: "20px",
  },
});

type Props = {
  uid: any;
};

const User: React.FC<Props> = ({ uid }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [icon, seticon] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // console.log("uid = ", uid);
    const userDoc = await db.collection("User").doc(uid).get();
    if (userDoc.exists) {
      // console.log(userDoc.get("displayName"));
      // console.log(userDoc.get("iconURL"));
      setName(userDoc.get("displayName"));
      seticon(userDoc.get("iconURL"));
    } else {
      console.log("No such uid.");
    }
  };

  return (
    <div>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={3}>
          <UserIcon name={name} icon={icon} />
        </Grid>
        <Grid item xs={9}>
          <UserName name={name} />
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="middle" />
    </div>
  );
};

export default User;
