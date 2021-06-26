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
  const [contentList, setContentList] = React.useState({});

  let contentDataList: any = [];

  const getData = async () => {
    await db
      .collection("Tips")
      .where("done", "==", true)
      .limit(5)
      .get()
      .then((snapshots) => {
        snapshots.docs.map((doc) => {
          contentDataList.push({
            src: doc.data().imageURL,
            alt: doc.data().content,
            text: doc.data().content,
          });
        });
        console.log(contentDataList);
      });
  };

  getData();

  return (
    <div>
      <Introduction></Introduction>
      <TextLabel
        classname="description"
        text="みんなに消化されたコンテンツ"
      ></TextLabel>
      <ContentList contents={contentDataList}></ContentList>
    </div>
  );
};

export default TopPage;
