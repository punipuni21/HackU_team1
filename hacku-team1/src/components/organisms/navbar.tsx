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
    // head: {
    //   display: 'flex'
    // },
    logoutButton: {
      marginRight: theme.spacing(2),
      marginLeft: 'auto',
      marginTop: 0,
      color: 'white',
      borderColor: 'white',
      // alignItems: 'flex-start',
      // justifyContent: 'right'
    },
    toolbar: {
      minHeight: 96,
      // alignItems: 'flex-start',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      // display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      flexGrow: 1,
    //   alignSelf: 'flex-start',
      // justifyContent: 'center',
      marginLeft: 'calc(20%)',
      // marginRight: 'auto'
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
            {/* <div className={classes.head}> */}
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
            {/* <Typography className={classes.title} variant="h5" noWrap>
              AppName
            </Typography>
            <Button variant="outlined" className={classes.logoutButton}>Logout</Button> */}
            {/* </div> */}
            {/* <Grid container spacing={3} className={classes.pageButton}>
              <Grid item xs={4}>
                <Button>あなた</Button>
              </Grid>
              <Grid item xs={4}>
                <Button>わたし</Button>
              </Grid>
              <Grid item xs={4}>
                <Button>トップ</Button>
              </Grid>
            </Grid> */}
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