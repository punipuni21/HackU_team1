import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { db } from "../../firebase/firebase";

import UserIcon from "../molecules/UserIcon";
import UserName from "../molecules/UserName";
import { Box, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import UserEditButton from "../molecules/UserEditButton";


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
          {icon.length !== 0 ? (
            <>
              <Grid item xs={4}>
                <UserIcon name={name} icon={icon} />
              </Grid>
              <Grid item xs={8}>
                <UserName name={name} />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={4}>
                <Skeleton variant="circle" width={96} height={96} />
              </Grid>
              <Grid item xs={8}>
                <Typography component="div" variant="h3">
                  <Skeleton />
                </Typography>
              </Grid>
            </>
          )}

          <Grid item xs={7}>
            <UserName name={name} />
          </Grid>
          <Grid item xs={1}>
            {myUid === otherUid && (
              <UserEditButton
                myUid={myUid}
                otherUid={otherUid}
                reloadDB={getData}
              />
            )}
          </Grid>
        </Grid>
      </Box>
      <Divider className={classes.divider} variant="middle" />
    </div>
  );
};

export default User;
