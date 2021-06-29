import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RecommendDialog from "../molecules/RecommendDialog";
import FavoriteIcon from '@material-ui/icons/Favorite';
// import { Typography } from "@material-ui/core/styles/createTypography";
import { Typography } from "@material-ui/core";

interface Props {
  docid: string;
  text: string;
  goodNum: number;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 15,
    paddingTop: 4,
    paddingBottom: 4
  },
  goodIcon: {
    display: "flex"
  } ,
  goodNumFont: {
    fontSize: 12,
    marginTop: 2,
    marginLeft: 2
  }
}));

const RecommendButton = (props: Props) => {
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
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleOpen}
        endIcon={<div className={classes.goodIcon}>
          <FavoriteIcon fontSize="small"/>
          <Typography className={classes.goodNumFont}>{props.goodNum}</Typography>
        </div>}
      >
        {props.text}
        {/* <FavoriteIcon fontSize="small"/> */}
      </Button>
      <RecommendDialog
        docid={props.docid}
        title={"「" + props.text + "」の成果を投稿！"}
        isOpen={open}
        doClose={() => handleClose()}
      ></RecommendDialog>
    </>
  );
};

export default RecommendButton;
