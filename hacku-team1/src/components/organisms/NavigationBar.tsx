import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Box,
} from "@material-ui/core";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";

import SectionBar from "../molecules/SectionBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "primary",
  },
  toolBar: {
    minHeight: 24,
    padding: 0,
  },
  sectionBar: {
    flexGrow: 1,
  },
  loginButton: {
    marginRight: theme.spacing(2),
    marginLeft: "auto",
    color: "white",
    borderColor: "white",
    backgroundColor: "inherit",
    textTransform: "none",
  },
}));

type Props = {
  signIn: () => void;
  signOut: () => void;
  uid: string | null;
  userIcon: string;
  setOtherUid: any;
};
const NavigationBar: React.FC<Props> = ({
  signIn,
  signOut,
  uid,
  userIcon,
  setOtherUid,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.sectionBar}>
            <SectionBar
              isSignIn={uid ? true : false}
              uid={uid}
              setOtherUid={setOtherUid}
            />
          </div>

          {uid ? (
            <>
              <Button
                onClick={handleClick}
                aria-controls="simple-menu"
                aria-haspopup="true"
              >
                <Avatar src={userIcon} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={signOut}>
                  <Box mr={1} mt={1}>
                    <MeetingRoomOutlinedIcon />
                  </Box>
                  Sign Out
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              className={classes.loginButton}
              variant="outlined"
              onClick={signIn}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
