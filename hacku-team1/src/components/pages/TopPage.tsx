import React, { useEffect, useState } from "react";
import Introduction from "../molecules/Introduction";
import ContentList from "../organisms/ContentList";
import TextLabel from "../atoms/TextLabel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { db } from "../../firebase/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textLabel: {
      position: "relative",
      width: "730px",
      height: "56px",
      left: "calc(50% - 730px/2)",
      top: "0px",
      /* H2 - bold 44 (56, 0.2px) */
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "44px",
      lineHeight: "56px",
      /* identical to box height, or 127% */
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
  })
);

const TopPage: React.FC = () => {
  const [contentList, setContentList] = React.useState([]);

  const getData = async () => {
    const snapshots = await db.collection("Tips").limit(5).get()
    console.log(snapshots.size)
    console.log(snapshots.docs.map(postDoc => postDoc.id))
    console.log(snapshots.empty)
    console.log(snapshots.docs.map(postDoc => postDoc.id))
    snapshots.forEach((postDoc) => {
      console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data()))
    })
    // const docs = snapshots.docs.map(doc => doc.data());
    // console.log(docs)
    // docs.map((doc) => doc.data());
    // await setContentList({
    //   list: docs,
    // });
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
      <ContentList contents={contents}></ContentList>
    </div>
  );
};

export default TopPage;
