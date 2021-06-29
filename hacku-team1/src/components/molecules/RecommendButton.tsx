import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RecommendDialog from "../molecules/RecommendDialog";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import { Typography } from "@material-ui/core/styles/createTypography";
import { Typography } from "@material-ui/core";

import firebase from "firebase/app";
import { db, firebaseApp } from "../../firebase/firebase";

interface Props {
  myUid: string;
  docid: string;
  text: string;
  refURL: string;
  recommenderIDs: Array<string>;
  isMyPage: boolean;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 15,
    paddingTop: 4,
    paddingBottom: 4,
  },
  goodIcon: {
    display: "flex",
  },
  goodNumFont: {
    fontSize: 12,
    marginTop: 2,
    marginLeft: 2,
  },
}));

const RecommendButton = (props: Props) => {
  const classes = useStyles();

  const [goodNum, setGoodNum] = useState(props.recommenderIDs.length)
  const [isGoodInit, setIsGoodInit] = useState(props.recommenderIDs.indexOf(props.myUid) !== -1)

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleOpen}
        endIcon={
          <div className={classes.goodIcon}>
            <FavoriteIcon fontSize="small" />
            <Typography className={classes.goodNumFont}>
              {goodNum}
            </Typography>
          </div>
        }
      >
        {props.text}
      </Button>
      <RecommendDialog
        myUid={props.myUid}
        docid={props.docid}
        title={ props.isMyPage ? (
          "「" + props.text + "」の成果を投稿！"
        ) : (
          "「" + props.text + "」がオススメ！"
        )}
        refURL={props.refURL}
        isOpen={open}
        isMyPage={props.isMyPage}
        isGoodInit={isGoodInit}
        setIsGoodInit={setIsGoodInit}
        goodNum={goodNum}
        setGoodNum={setGoodNum}
        doClose={() => handleClose()}
      ></RecommendDialog>
    </>
  );
};

export default RecommendButton;
