import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CompleteButton from "../molecules/CompleteButton";
import { db } from "../../firebase/firebase";
import DecoratedHead from "../molecules/DecoratedHead";
import RecommendIcon from "../atoms/RecommendIcon";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {
  Box,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CompleteDialog from "../molecules/CompleteDialog";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
type Props = {
  myUid: any;
  otherUid: any;
};

type Data = {
  content: string;
  refURL: string;
  imageURL: string;
  doneContent: string;
};

const useStyles = makeStyles((theme) => ({
  h2: {
    textAlign: "left",
    marginTop: "20px",
    marginRight: "0px",
    marginBottom: "10px",
    marginLeft: "20px",
  },
  buttons: {
    // marginLeft: "40px",
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    // background:
    //   "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
    //   "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    // backgroundColor: theme.palette.secondary.dark,
    // opacity: "0.6",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Complete: React.FC<Props> = ({ myUid, otherUid }) => {
  const classes = useStyles();
  const [completeDataList, setCompleteDataList] = useState([]);

  useEffect(() => {
    getData();
  }, [otherUid]);

  const getData = async () => {
    const tmpData: any = [];

    await db
      .collection("Tips")
      .where("userID", "==", otherUid)
      .where("done", "==", true)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          tmpData.push({
            content: doc.data().content,
            refURL: doc.data().refURL,
            imageURL: doc.data().imageURL,
            doneContent: doc.data().doneContent,
          });
        });
      });
    setCompleteDataList(tmpData);
  };

  const [open, setOpen] = useState(false);
  const [opencontent, setOpencontent] = useState("");
  const handleOpen = (contentname: string) => {
    setOpen(true);
    setOpencontent(contentname);
  };
  const handleClose = () => {
    setOpen(false);
    setOpencontent("");
  };

  return (
    <div>
      <Box mt={1}>
        <DecoratedHead
          color="primary.main"
          icon={<CheckCircleIcon color="primary" />}
          text="達成"
        />
      </Box>
      {/* <div className={classes.buttons}>
        {completeDataList.map((data: Data) => (
          <CompleteButton
            text={data.content}
            refURL={data.refURL}
            img={data.imageURL}
            msg={data.doneContent}
            // onClick={}
          />
        ))}
      </div> */}

      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {/* {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                  <StarBorderIcon />
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))} */}
        {completeDataList.map((data: Data) => (
          <GridListTile key={data.content + data.imageURL} cols={1} rows={1}>
            {/* <CompleteButton
              text={data.content}
              refURL={data.refURL}
              img={data.imageURL}
              msg={data.doneContent}
              // onClick={}
            /> */}
            <img src={data.imageURL} alt={data.content} />
            <GridListTileBar
              title={
                <Typography variant="subtitle1">{data.content}</Typography>
              }
              className={classes.titleBar}
              actionIcon={
                <IconButton
                  className={classes.icon}
                  onClick={() => handleOpen(data.content)}
                >
                  <ZoomOutMapIcon />
                </IconButton>
              }
            />
            <CompleteDialog
              title={"「" + data.content + "」を達成しました！"}
              refURL={data.refURL}
              img={data.imageURL}
              msg={data.doneContent}
              isOpen={opencontent === data.content && open}
              doClose={() => handleClose()}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Complete;
