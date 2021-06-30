import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { db } from "../../firebase/firebase";

import UserIcon from "../molecules/UserIcon";
import UserName from "../molecules/UserName";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  divider: {
    marginBottom: "20px",
  },
});

type Props = {
  myUid: any;
  otherUid: any;
};

const User: React.FC<Props> = ({ myUid, otherUid }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [icon, seticon] = useState("");

  useEffect(() => {
    getData();
  }, [otherUid]);

  const getData = async () => {
    // console.log("uid = ", uid);
    const userDoc = await db.collection("User").doc(otherUid).get();
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
      <Box m={2}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={4}>
            <UserIcon name={name} icon={icon} />
          </Grid>
          <Grid item xs={8}>
            <UserName name={name} />
          </Grid>
        </Grid>
      </Box>
      <Divider className={classes.divider} variant="middle" />
    </div>
  );
};

export default User;
