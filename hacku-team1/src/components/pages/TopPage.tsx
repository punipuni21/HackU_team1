import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Introduction from "../molecules/Introduction";
import ContentList from "../organisms/ContentList";
import Usage from "../organisms/Usage";
import { db } from "../../firebase/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentList: {
      width: "100%",
      height: "auto",
      // top: "20px",
      // left: "0px",
      // right: "0px",
      // bottom: "0px",
      background: "#FFFFFF",
    },
    root: {
      // height: "90vh",
    },
  })
);

type Props = {
  uid: string | null;
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
    <Container className={classes.root}>
      <Introduction />
      <Typography variant="h2">最近消化されたおすすめ</Typography>
      <ContentList
        classname={classes.contentList}
        contents={contentDataList}
      ></ContentList>
      <Usage />
    </Container>
  );
};

export default TopPage;
