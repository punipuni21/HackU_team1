import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import AppName from '../molecules/appName';
import LogoutButton from '../molecules/logoutButton';
import SectionBar from '../molecules/sectionBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    logoutButton: {
      marginRight: theme.spacing(2),
      marginLeft: 'auto',
      marginTop: 0,
      color: 'white',
      borderColor: 'white',
    },
    toolbar: {
      minHeight: 96,
      paddingTop: theme.spacing(2),
      paddingBottom: 0,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      flexGrow: 1,
      marginLeft: 'calc(54%)',
    },
    pageButton: {
      alignSelf: 'flex-end',
    }
}));

const NavBar: React.FC = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={3}>
              <Grid item xs={10}>
                <AppName className={classes.title} />
              </Grid>
              <Grid item xs={2}>
                <LogoutButton className={classes.logoutButton} />
              </Grid>
            </Grid>
            <SectionBar />
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar