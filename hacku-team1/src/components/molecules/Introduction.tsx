import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

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

const Introduction: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        alt="Top Image"
        src="https://firebasestorage.googleapis.com/v0/b/hacku-team1.appspot.com/o/images%2FTopImg.png?alt=media&token=c9750052-2bdb-483f-858d-f8f9d64680c1"
        className={classes.topImage}
      />
      <Typography variant="body1" className={classes.typography}>
        興味はあるけれど <br className={classes.mobileBr} />
        何から始めたらいいのか分からない
      </Typography>
      <Typography variant="body1" className={classes.typography}>
        やっているあの人たちは <br className={classes.mobileBr} />
        あんなに楽しそうなのに！
      </Typography>
      <Typography variant="body1" className={classes.typography}>
        それは自分と他の人の間に引かれた <br className={classes.mobileBr} />
        見えない境界線のよう
      </Typography>
      <Typography variant="body1" className={classes.typography}>
        「しろ-せん」は <br className={classes.mobileBr} />
        経験値0を1に変える <br className={classes.mobileBr} />
        お手伝いをするアプリです
      </Typography>
      <Divider className={classes.divider} variant="middle" />
    </div>
  );
};

export default Introduction;
