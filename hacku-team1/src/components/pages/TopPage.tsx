import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import CheckCircle from "@material-ui/icons/CheckCircle";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import Introduction from "../molecules/Introduction";
import ContentList from "../organisms/ContentList";
import RecommendedUsersList from "../organisms/UsersList";
import Usage from "../organisms/Usage";

import { db } from "../../firebase/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentList: {
      width: "100%",
      height: "auto",
    },
  })
);

type Props = {
  uid: string | null;
  setOtherUid: any;
};

export type UserData = {
  userID: string;
  userName: string;
  iconURL: string;
};

const TopPage: React.FC<Props> = ({ uid, setOtherUid }) => {
  const [contentDataList, setContentDataList] = useState([]);
  const [recoUsersList, setRecoUsersList] = useState<UserData[]>();
  const classes = useStyles();

  useEffect(() => {
    getData();
    getRecoUsersList();
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
            refURL: doc.data().refURL,
            doneContent: doc.data().doneContent,
          });
        });
      });
    setContentDataList(temporaryContentData);
  };

  const getRecoUsersList = () => {
    let usersInfo: any = [];
    db.collection("User")
      .get()
      .then((response) => {
        response.forEach((userDocument) => {
          if (userDocument.id === uid) return;
          usersInfo.push({
            userID: userDocument.id,
            userName: userDocument.data().displayName,
            iconURL: userDocument.data().iconURL,
          });
        });
      })
      .finally(() => {
        setRecoUsersList(usersInfo);
      });
  };

  const shuffleArray = (inputArray: UserData[] | undefined) => {
    if (inputArray !== undefined) {
      inputArray.sort(() => Math.random() - 0.5);
    }

    return inputArray ? inputArray.slice(0, 5) : inputArray;
  };

  return (
    <Container>
      <Introduction />
      <ContentList
        colSize={5}
        title="最近達成されたおすすめ"
        icon={<CheckCircle />}
        color="primary.main"
        contents={contentDataList}
      ></ContentList>
      <RecommendedUsersList
        uid={uid}
        setOtherUid={setOtherUid}
        colSize={5}
        title="おすすめのユーザー"
        icon={<SupervisedUserCircleIcon />}
        color="primary.main"
        contents={shuffleArray(recoUsersList)}
      ></RecommendedUsersList>
      <Usage />
      <Divider variant="middle" />
      <Typography variant="body2" align="right">
        icon by <Link href="https://icooon-mono.com/">ICOON MONO</Link>
      </Typography>
      <Typography variant="body2" align="right">
        illustration by{" "}
        <Link href="https://loosedrawing.com/">Loose Drawing</Link>
      </Typography>
    </Container>
  );
};

export default TopPage;
