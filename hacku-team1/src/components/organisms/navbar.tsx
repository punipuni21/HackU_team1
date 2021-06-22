import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
      marginLeft: 'calc(20%)',
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
                <Typography className={classes.title} variant="h5" noWrap>
                  AppName
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" className={classes.logoutButton}>Logout</Button>
              </Grid>
            </Grid>
            <Tabs aria-label="simple tabs example">
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar