import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import UserIcon from "../atoms/UserIcon";
import GroupIcon from "../atoms/GroupIcon";
import AppIcon from "../atoms/AppIcon";
import AppName from "./appName";

type Props = {
  isSignIn: boolean;
};

function a11yProps(index: any) {
  return {
    id: `section-tab-${index}`,
    "aria-controls": `section-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "inherit",
  },
  title: {
    flexGrow: 1,
  },
  tabPC: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tabsMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      position: "fixed",
      left: 0,
      bottom: 0,
      zIndex: 1000,
      textAlign: "center",
      backgroundColor: "gray",
      margin: 0,
    },
  },
  tabMobile: {
    width: "100%",
    marginTop: -10,
  },
  tabMobileLabel: {
    fontSize: "12px",
  },
  indicator: {
    backgroundColor: "white",
  },
}));

const SectionBar: React.FC<Props> = (props) => {
  const currentTab = () => {
    let path = window.location.pathname
    if (path === "/") return 0
    else if (path === "/mypage") return 1
    else if (path === "/otherspage") return 2
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(currentTab());

  React.useEffect(() => {
    let path = window.location.pathname;
    if (path === "/" && value !== 0) setValue(0);
    else if (path === "/mypage" && value !== 1) setValue(1);
    else if (path === "/otherspage" && value !== 2) setValue(2);
  }, [value, props.isSignIn]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="section tabs"
        classes={{
          indicator: classes.indicator
        }}
      >
        <Tab
          style={{width: "220px", textTransform: "none"}}
          label={
            <div style={{display: "flex"}}>
              <AppIcon size={40} color="white" style={{marginRight: "8px"}} />
              <AppName className={classes.title} />
            </div>
          }
          component={Link}
          to="/"
          {...a11yProps(0)}
        />

        <div className={classes.tabPC} onClick={() => handleClick(1)} style={props.isSignIn ? {} : {display: "none"}} >
          <Tab
            label={
              <div style={{display: "flex"}}>
                <UserIcon size={24} color="white" style={{marginRight: "2px"}} />
                わたし
              </div>
            }
            component={Link}
            to="/mypage"
            {...a11yProps(1)}
          />
        </div>
        <div className={classes.tabPC} onClick={() => handleClick(2)} style={props.isSignIn ? {} : {display: "none"}}>
          <Tab
            label={
              <div style={{display: "flex"}}>
                <GroupIcon size={24} color="white" style={{marginRight: "2px"}} />
                だれか
              </div>
            }
            component={Link}
            to="/otherspage"
            {...a11yProps(2)}
          />
        </div>
      </Tabs>

      <div className={classes.tabsMobile} style={props.isSignIn ? {} : {display: "none"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="mobile tabs"
          variant="fullWidth"
          classes={{
            indicator: classes.indicator
          }}
          style={{height: "48px"}}
        >
          <Tab style={{display: "none"}} ></Tab>
          <div className={classes.tabMobile} onClick={() => handleClick(1)}>
            <Tab
              icon={<UserIcon size={18} color="white" style={{margin: 0}} />}
              label={<span className={classes.tabMobileLabel}>わたし</span>}
              component={Link}
              to="/mypage"
              {...a11yProps(1)}
              style={{width: "100%"}}
            />
          </div>
          <div className={classes.tabMobile} onClick={() => handleClick(2)}>
            <Tab
              icon={<GroupIcon size={18} color="white" style={{margin: 0}} />}
              label={<span className={classes.tabMobileLabel}>だれか</span>}
              component={Link}
              to="/otherspage"
              {...a11yProps(2)}
              style={{width: "100%"}}
            />
          </div>
        </Tabs>
      </div>
    </div>
    </>
  );
};

export default SectionBar