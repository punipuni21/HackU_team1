import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Container, Divider, Link, Typography } from '@material-ui/core';

import CheckCircle from '@material-ui/icons/CheckCircle';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import Alert from '@material-ui/lab/Alert';

import Introduction from '../molecules/Introduction';
import ContentList from '../organisms/ContentList';
import UsersList from '../organisms/UsersList';
import Usage from '../organisms/Usage';

import { db } from '../../firebase/firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentList: {
      width: '100%',
      height: 'auto',
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
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    getData();
    getRecoUsersList();
    getUserData();
  }, [uid]);

  const getData = async () => {
    const temporaryContentData: any = [];
    await db
      .collection('Tips')
      .where('done', '==', true)
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
    db.collection('User')
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

  const getUserData = () => {
    if (!uid) return;
    db.collection('Status')
      .where('userID', '==', uid)
      .get()
      .then((response) => {
        if (response.empty) setOpen(true);
      });
  };

  const returnAlert = () => {
    if (!uid || !open) return;
    return (
      <Box
        style={{
          position: 'fixed',
          zIndex: 100,
          width: '100%',
        }}>
        <Box mx={1}>
          <Alert
            variant="filled"
            onClose={() => {
              setOpen(false);
            }}
            severity="info">
            「
            <Link href="/mypage" color="secondary">
              わたし
            </Link>
            」から何のしろうとなのかを登録しましょう
          </Alert>
        </Box>
      </Box>
    );
  };

  const shuffleArray = (inputArray: UserData[] | undefined) => {
    if (inputArray !== undefined) {
      inputArray.sort(() => Math.random() - 0.5);
    }

    return inputArray ? inputArray.slice(0, 5) : inputArray;
  };

  return (
    <>
      {returnAlert()}
      <Container>
        <Introduction uid={uid} />
        <ContentList
          colSize={5}
          title="最近達成されたおすすめ"
          icon={<CheckCircle />}
          color="primary.main"
          contents={contentDataList}></ContentList>
        <UsersList
          uid={uid}
          setOtherUid={setOtherUid}
          colSize={5}
          title="おすすめのユーザー"
          icon={<SupervisedUserCircleIcon />}
          color="primary.main"
          contents={shuffleArray(recoUsersList)}></UsersList>
        <Usage />
        <Divider variant="middle" />
        <Typography variant="body2" align="right">
          icon by <Link href="https://icooon-mono.com/">ICOON MONO</Link>
        </Typography>
        <Typography variant="body2" align="right">
          illustration by <Link href="https://loosedrawing.com/">Loose Drawing</Link>
        </Typography>
      </Container>
    </>
  );
};

export default TopPage;
