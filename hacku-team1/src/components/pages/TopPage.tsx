import React, { useEffect, useState } from "react";
import Introduction from "../molecules/Introduction";
import ContentList from "../organisms/ContentList";
import TextLabel from "../atoms/TextLabel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { db } from "../../firebase/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textLabel: {
      position: "absolute",
      left: "0.69%",
      right: "72.08%",
      top: "50%",
      bottom: "46.09%",
      width: "730px",
      height: "56px",
      /* H2 - bold 44 (56, 0.2px) */
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "28px",
      lineHeight: "140.62%",

      /* identical to box height, or 127% */
      textDecorationLine: "underline",
      textAlign: "center",
      // letterSpacing: "0.2px",
      /* Light / Black */
      color: "black",
      /* Inside Auto Layout */
      // flex: "none",
      // order: 0,
      // flexGrow: 0,
      // margin: "0",
      // padding: "3% 0",
    },
    contentList: {
      position: "absolute",
      width: "100%",
      top: "20px",
      left: "0px",
      right: "0px",
      bottom: "0px",
      background: "#FFFFFF",
    },
  })
);

const TopPage: React.FC = () => {
  let contentDataList: any = [];
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    await db
      .collection("Tips")
      .where("done", "==", true)
      .limit(5)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          contentDataList.push({
            src: doc.data().imageURL,
            alt: doc.data().content,
            text: doc.data().content,
          });
        });
      });
    console.log(await Promise.all(contentDataList));
  };


  const contents = [
    {
      src: "./logo192.png",
      alt: "画像",
      text: "画像1",
    },
    {
      src: "./logo192.png",
      alt: "画像",
      text: "画像2",
    },
    {
      src: "./logo192.png",
      alt: "画像",
      text: "画像3",
    },
    {
      src: "./logo192.png",
      alt: "画像",
      text: "画像4",
    },
  ];

  return (
    <div>
      <Introduction></Introduction>
      <TextLabel
        classname="description"
        text="みんなに消化されたコンテンツ"
      ></TextLabel>
      <ContentList
        classname={classes.contentList}
        contents={contentDataList}
      ></ContentList>
    </div>
  );
};

export default TopPage;
