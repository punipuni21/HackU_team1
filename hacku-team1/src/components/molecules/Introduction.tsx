import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import firebase from "../../firebase/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      textAlign: "center",
    },
    topImage: {
      height: "240px",
      [theme.breakpoints.down("xs")]: {
        height: "180px",
      },
    },
    typography: {
      margin: "1.5rem 0",
      fontFamily: "serif",
    },
    mobileBr: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "inline",
      },
    },
    divider: {
      marginBottom: "20px",
    },
  })
);

type Props = {
  uid: string | null;
};

const Introduction: React.FC<Props> = ({ uid }) => {
  const classes = useStyles();

  const onClick = () => {
    signIn();
  };

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const returnSignInButton = () => {
    if (!uid) {
      return (
        <Box mb={4}>
          <Button
            variant="contained"
            color="primary"
            style={{ textTransform: "none" }}
            onClick={onClick}
          >
            Google で Sign In
          </Button>
        </Box>
      );
    }
  };

  return (
    <div className={classes.root}>
      <img
        alt="Top Image"
        src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2FTopImg.png?alt=media&token=c9750052-2bdb-483f-858d-f8f9d64680c1"
        className={classes.topImage}
      />
      <Typography variant="body1" className={classes.typography}>
        興味はあるけれど <br className={classes.mobileBr} />
        何から始めたらいいのか分からない…
      </Typography>
      <Typography variant="body1" className={classes.typography}>
        やっているあの人たちは <br className={classes.mobileBr} />
        あんなに楽しそうなのに！
      </Typography>
      <Typography variant="body1" className={classes.typography}>
        それは自分と他の人の間に引かれた <br className={classes.mobileBr} />
        <span style={{ textDecoration: "underline" }}>見えない境界線</span>
        のよう
      </Typography>
      <Typography variant="body1" className={classes.typography}>
        <b style={{ color: "#bb4d54", fontSize: "1.2em" }}>「しろ-せん」</b>は{" "}
        <br className={classes.mobileBr} />
        その白い線から一歩踏み出す <br className={classes.mobileBr} />
        お手伝いをするアプリです
      </Typography>
      {returnSignInButton()}
      <Divider className={classes.divider} variant="middle" />
    </div>
  );
};

export default Introduction;
