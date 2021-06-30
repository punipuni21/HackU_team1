import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

import SectionBar from "../molecules/SectionBar";

import firebase from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
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
  handleLogin: (uid: string | null) => void;
  uid: string | null;
  setOtherUid: any;
};
const NavigationBar: React.FC<Props> = ({ handleLogin, uid, setOtherUid }) => {
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] = useState<firebase.firestore.DocumentData | null>(
    null
  );

  const [usericon, setUserIcon] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        handleLogin(user.uid);
        user.photoURL && setUserIcon(user.photoURL);
        var userDoc = await db.collection("User").doc(user.uid).get();
        if (!userDoc.exists) {
          // Firestore にユーザー用のドキュメントが作られていなければ作る
          await userDoc.ref.set({
            displayName: user.displayName,
            iconURL: user.photoURL,
          });

          // 例として、statusに「このアプリの初心者」
          await db
            .collection("Status")
            .add({ content: "このアプリの初心者", userID: user.uid });
        } else {
          // 存在する場合はディスプレイネームとアイコンを更新
          await userDoc.ref.update({
            displayName: user.displayName,
            iconURL: user.photoURL,
          });
        }
      } else {
        handleLogin(null);
      }
    });
  }, []);

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };

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
              isSignIn={user ? true : false}
              uid={uid}
              setOtherUid={setOtherUid}
            />
          </div>

          {user ? (
            <>
              <Button
                onClick={handleClick}
                aria-controls="simple-menu"
                aria-haspopup="true"
              >
                <Avatar src={usericon} />
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
