import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import UserEditButton from '../molecules/UserEditButton';

import { Box, Typography, Grid, Divider, Avatar, Container } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  avatar: { width: 'fit-content', height: 'fit-content' },
});

type Props = {
  myUid: any;
  otherUid: any;
  name: string;
  icon: string;
  getData: any;
};

const User: React.FC<Props> = ({ myUid, otherUid, name, icon, getData }) => {
  const classes = useStyles();

  return (
    <div>
      <Box m={2}>
        <Grid container alignItems="center" justify="center">
          {icon.length !== 0 ? (
            <>
              <Grid item xs={3}>
                <Container>
                  <Avatar alt={name} src={icon} className={classes.avatar} />
                </Container>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4">{name}</Typography>
              </Grid>
              <Grid item xs={1}>
                {myUid === otherUid && (
                  <UserEditButton myUid={myUid} otherUid={otherUid} reloadDB={getData} />
                )}
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
        </Grid>
      </Box>
      <Box mb={2}>
        <Divider variant="middle" />
      </Box>
    </div>
  );
};

export default User;
