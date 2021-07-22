import React, { useEffect, useState } from 'react';

import { Container, Box } from '@material-ui/core';

import { db } from '../../firebase/firebase';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BiginnerIcon from '../atoms/BeginnerIcon';
import RecommendIcon from '../atoms/RecommendIcon';

import User from '../organisms/User';
import UserContent from '../organisms/UserContent';

import Status from '../molecules/Status';
import Recommended from '../molecules/Recommended';
import Complete from '../molecules/Complete';

type Props = {
  myUid: string | null;
  otherUid: string | null;
};

async function createStatusOnDB(content: string, uid: string | null) {
  try {
    await db.collection('Status').add({
      content: content,
      userID: uid,
    });
  } catch (error) {
    console.log('新たなStatuの作成に失敗 : content = ' + content);
  }
}

async function deleteStatusFromDB(content: string, myUid: string | null, otherUid: string | null) {
  await db
    .collection('Status')
    .where('userID', '==', otherUid)
    .where('content', '==', content)
    .get()
    .then(async (snapshot) => {
      snapshot.docs.map((doc) => {
        db.collection('Status').doc(doc.id).delete();
      });
    });
}

const UserPage: React.FC<Props> = ({ myUid, otherUid }) => {
  const [statusDataList, setStatusDataList] = useState<string[]>([]);
  const [recommendedDataList, setRecommendedDataList] = useState([]);
  const [completeDataList, setCompleteDataList] = useState([]);
  const [name, setName] = useState('');
  const [icon, seticon] = useState('');

  useEffect(() => {
    console.log('UserPage');

    getDataUser();
    getDataStatus();
    getDataTipsTodo();
    getDataTipsDone();
  }, [otherUid]);

  const updateDB = async () => {
    // 追加されたリストから重複の削除
    const uniqueContents = [...new Set(statusDataList)];

    // 直前の要素をDBからもう一度取
    const rowData: string[] = [];
    await db
      .collection('Status')
      .where('userID', '==', otherUid)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          rowData.push(doc.data().content);
        });

        // 2つのリストの差分をとる
        // 追加されるもの
        const createdItems = uniqueContents.filter((item) => rowData.indexOf(item) === -1);

        // 削除されるもの
        const deletedItems = rowData.filter((item) => uniqueContents.indexOf(item) === -1);

        // DBに格納
        createdItems.map((item) => {
          createStatusOnDB(item, otherUid);
        });
        // DBから削除
        deletedItems.map((item) => {
          deleteStatusFromDB(item, myUid, otherUid);
        });

        setStatusDataList(uniqueContents);
      });
  };

  const getDataUser = async () => {
    // console.log("uid = ", uid);
    if (otherUid) {
      const userDoc = await db.collection('User').doc(otherUid).get();
      if (userDoc.exists) {
        // console.log(userDoc.get("displayName"));
        // console.log(userDoc.get("iconURL"));
        setName(userDoc.get('displayName'));
        seticon(userDoc.get('iconURL'));
      } else {
        console.log('No such uid.');
      }
    }
  };

  const getDataStatus = async () => {
    const rowData: string[] = [];
    await db
      .collection('Status')
      .where('userID', '==', otherUid)
      .get()
      .then(async (snapshots) => {
        // eslint-disable-next-line array-callback-return
        snapshots.docs.map((doc) => {
          rowData.push(doc.data().content);
        });
      });
    setStatusDataList(rowData);
  };

  const getDataTipsTodo = async () => {
    const tmpData: any = [];
    await db
      .collection('Tips')
      .where('userID', '==', otherUid)
      .where('done', '==', false)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          tmpData.push({
            docid: doc.id,
            content: doc.data().content,
            refURL: doc.data().refURL,
            recommenderIDs: doc.data().recommenderIDs,
          });
        });
      });
    setRecommendedDataList(tmpData);
  };

  const getDataTipsDone = async () => {
    const tmpData: any = [];

    await db
      .collection('Tips')
      .where('userID', '==', otherUid)
      .where('done', '==', true)
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

  return (
    <>
      {myUid && otherUid && (
        <Container>
          <User myUid={myUid} otherUid={otherUid} name={name} icon={icon} getData={getDataUser} />

          <UserContent
            text="何のしろうと？"
            color="#bb4d54"
            icon={<BiginnerIcon size={28} color="#bb4d54" style={{ marginRight: '0.5rem' }} />}
            isStatus={true}
            myUid={myUid}
            otherUid={otherUid}
            statusDataList={statusDataList}
            setStatusDataList={setStatusDataList}
            updateDB={updateDB}
            Component={
              <Status
                myUid={myUid}
                otherUid={otherUid}
                statusDataList={statusDataList}
                editContents={setStatusDataList}
                updateDB={updateDB}
              />
            }
          />

          <Box my={4}>
            <UserContent
              text="これ、おすすめです!"
              color="#bb4d54"
              icon={<RecommendIcon size={28} color="#bb4d54" style={{ marginRight: '0.5rem' }} />}
              isStatus={false}
              myUid={myUid}
              otherUid={otherUid}
              statusDataList={statusDataList}
              setStatusDataList={setStatusDataList}
              updateDB={updateDB}
              Component={
                <Recommended
                  myUid={myUid}
                  otherUid={otherUid}
                  recommendedDataList={recommendedDataList}
                  getData={getDataTipsTodo}
                />
              }
            />
          </Box>

          <UserContent
            text="達成"
            color="#bb4d54"
            icon={<CheckCircleIcon color="primary" />}
            isStatus={false}
            myUid={myUid}
            otherUid={otherUid}
            statusDataList={statusDataList}
            setStatusDataList={setStatusDataList}
            updateDB={updateDB}
            Component={<Complete completeDataList={completeDataList} />}
          />
        </Container>
      )}
    </>
  );
};

export default UserPage;
