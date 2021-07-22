import React, { Children, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import EditButton from '../molecules/EditButton';

type Props = {
  color?: any;
  icon: any;
  text: string;
  myUid: string;
  otherUid: string;
  statusDataList: string[];
  setStatusDataList: any;
  updateDB: any;
  Component: any;
  isStatus: boolean;
};

const useStyles = makeStyles((theme) => ({
  items: {
    // marginLeft: "40px",
  },
  editButton: {
    marginTop: '5px',
  },
  h2: {
    textAlign: 'left',
    marginTop: '20px',
    marginRight: '0px',
    marginBottom: '10px',
    marginLeft: '20px',
  },
  buttons: {
    // marginLeft: "40px",
  },

  gridList: {
    // maxWidth: 600,
    // height: 450,
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)",
  },
  titleBar: {
    // background:
    //   "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
    //   "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    // backgroundColor: theme.palette.secondary.dark,
    // opacity: "0.6",
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridtile: {
    maxWidth: '300px',
    maxHeight: '300px',
    '& > *': {
      borderRadius: '4px',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },

    [theme.breakpoints.down('sm')]: {
      maxHeight: '200px',
    },
  },
}));

const UserContent: React.FC<Props> = ({
  color,
  icon,
  text,
  myUid,
  otherUid,
  isStatus,
  statusDataList,
  setStatusDataList,
  updateDB,
  Component,
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box borderBottom={2} color={color} mb={3} pb={1}>
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <Box mt={0.5}>{icon}</Box>
          </Grid>
          <Grid item>
            <Typography variant="h2">{text}</Typography>
          </Grid>
          {isStatus && (
            <Grid item>
              {myUid === otherUid && (
                <EditButton
                  style={classes.editButton}
                  contents={statusDataList}
                  editContents={setStatusDataList}
                  updateDB={updateDB}
                  open={open}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
              )}
            </Grid>
          )}
        </Grid>
      </Box>
      {Component}
    </>
  );
};

export default UserContent;
