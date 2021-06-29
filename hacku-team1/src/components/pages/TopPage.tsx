import React, { useEffect, useState } from "react";
import Introduction from "../molecules/Introduction";
import ContentList from "../organisms/ContentList";
import TextLabel from "../atoms/TextLabel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { db } from "../../firebase/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textLabel: {
      // position: "static",
      width: "100%",
      height: "20em",
      /* H2 - bold 44 (56, 0.2px) */
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "28px",
      lineHeight: "140.62%",

      /* identical to box height, or 127% */
      textDecorationLine: "underline",
      textAlign: "center",
      letterSpacing: "0.2px",
      /* Light / Black */
      color: "black",
      /* Inside Auto Layout */
      flex: "none",
      order: 0,
      flexGrow: 0,
      margin: "0",
      padding: "3% 0",
    },
    contentList: {
      width: "100%",
      height: "30em",
      background: "#FFFFFF",
    },
    introduction: {
      margin: "0px",
    },
    introContent: {
      height: "90vh",
    },
    textlabel: {
      margin: "1em 0",
    }
  })
);

type Props = {
  uid : string | null;
};

const TopPage: React.FC<Props> = ({ uid }) => {
  const [contentDataList, setContentDataList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const temporaryContentData: any = [];
    await db
      .collection("Tips")
      .where("done", "==", true)
      .limit(5)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          temporaryContentData.push({
            src: doc.data().imageURL,
            alt: doc.data().content,
            text: doc.data().content,
          });
        });
      });
    setContentDataList(temporaryContentData);
  };

  return (
    <div className={classes.introContent}>
      <div className={classes.introduction}>
        <Introduction></Introduction>
        <TextLabel
          classname={classes.textlabel}
          text="みんなに消化されたコンテンツ"
        ></TextLabel>
      </div>
        <ContentList
          classname={classes.contentList}
          contents={contentDataList}
        ></ContentList>
    </div>
  );
};

export default TopPage;
