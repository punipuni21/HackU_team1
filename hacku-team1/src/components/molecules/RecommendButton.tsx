import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RecommendDialog from "../molecules/RecommendDialog";

// import { Typography } from "@material-ui/core/styles/createTypography";
import { Typography } from "@material-ui/core";

import RecommendIcon from "../atoms/RecommendIcon";
import LightTooltip from "../atoms/LightTooltip";

interface Props {
  myUid: string;
  docid: string;
  text: string;
  refURL: string;
  recommenderIDs: Array<string>;
  isMyPage: boolean;
  reloadDB: VoidFunction;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 15,
    paddingTop: 4,
    paddingBottom: 4,
    textTransform: "none",
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

  const [goodNum, setGoodNum] = useState(props.recommenderIDs.length);
  const [isGood, setIsGood] = useState(
    props.recommenderIDs.indexOf(props.myUid) !== -1
  );

  useEffect(() => {
    setGoodNum(props.recommenderIDs.length);
    setIsGood(props.recommenderIDs.indexOf(props.myUid) !== -1);
  }, [props.docid]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LightTooltip
        title={
          <a href={props.refURL} target="_blank" rel="noopener noreferrer">
            せんぱいによる参考URL
          </a>
        }
        placement="top-end"
        interactive
      >
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleOpen}
          endIcon={
            <div className={classes.goodIcon}>
              <RecommendIcon
                size={18}
                color={
                  props.isMyPage ? "#333333" : !isGood ? "#e2e2e2" : "#bb4d54"
                }
                style={{
                  marginRight: "0.2rem",
                  marginTop: "0.1rem",
                  marginLeft: "0.3rem",
                }}
              />
              <Typography className={classes.goodNumFont}>{goodNum}</Typography>
            </div>
          }
        >
          {props.text}
        </Button>
      </LightTooltip>
      <RecommendDialog
        myUid={props.myUid}
        docid={props.docid}
        title={
          props.isMyPage
            ? "「" + props.text + "」の成果を投稿！"
            : "「" + props.text + "」がおすすめ！"
        }
        refURL={props.refURL}
        isOpen={open}
        isMyPage={props.isMyPage}
        isGoodInit={isGood}
        setIsGoodInit={setIsGood}
        goodNum={goodNum}
        setGoodNum={setGoodNum}
        doClose={() => handleClose()}
        reloadDB={props.reloadDB}
      ></RecommendDialog>
    </>
  );
};

export default RecommendButton;
