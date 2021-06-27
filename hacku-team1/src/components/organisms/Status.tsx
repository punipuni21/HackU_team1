import React, { useEffect, useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StatusItem from "../molecules/StatusItem";
import { IconButton } from "@material-ui/core";

import EditButton from "../molecules/EditButton"
import { db } from "../../firebase/firebase";

interface Props {
  text: string;
  uid: string | null;
}

const useStyles = makeStyles((theme) => ({
  h2: {
    textAlign: "left",
    marginTop: "20px",
    marginRight: "0px",
    marginBottom: "10px",
    marginLeft: "20px",
  },
  items: {
    marginLeft: "40px",
  },
  editButton: {
    marginTop: "5px"
  }
}));

async function createStatusOnDB(content: string, uid: string | null) {
  try {
        await db
          .collection("Status")
          .add({
            content: content,
            userID: uid
          });
  } catch (error) {
      console.log("新たなStatuの作成に失敗 : content = " + content );
  }
}

async function deleteStatusFromDB(content: string, uid: string | null) {
  await db
    .collection("Status")
    .where("userID", "==", uid)
    .where("content", "==", content)
    .get()
    .then(async (snapshot) => {
      snapshot.docs.map((doc) => {
        db.collection("Status").doc(doc.id).delete()
      })
    })
}

const Status = (props: Props) => {
  const classes = useStyles();
  const [statusDataList, setStatusDataList] = useState<string[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const updateDB = async () => {

    // 追加されたリストから重複の削除
    const uniqueContents = [...new Set(statusDataList)];

    // 直前の要素をDBからもう一度取
    const rowData: string[] = [];
    await db
      .collection("Status")
      .where("userID", "==", props.uid)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          rowData.push(
            doc.data().content,
          );
        });

        // 2つのリストの差分をとる
          // 追加されるもの
        const createdItems = uniqueContents.filter(item =>
          rowData.indexOf(item) === -1
        );

          // 削除されるもの
        const deletedItems = rowData.filter(item =>
          uniqueContents.indexOf(item) === -1
        );
        
        // DBに格納
        createdItems.map((item) => {
          createStatusOnDB(item, props.uid)
        })
        // DBから削除
        deletedItems.map((item) => {
          deleteStatusFromDB(item, props.uid)
        })

      });

    
  }

  const getData = async () => {
    const rowData: string[] = [];
    await db
      .collection("Status")
      .where("userID", "==", props.uid)
      .get()
      .then(async (snapshots) => {
        // eslint-disable-next-line array-callback-return
        snapshots.docs.map((doc) => {
          rowData.push(
            doc.data().content,
          );
        });
      });
    setStatusDataList(rowData);
  };


  return (
    <div>
      <div style={{display: "flex"}}>
        <h2 className={classes.h2}>何の初心者？</h2>
        <EditButton 
          style={classes.editButton} 
          contents={statusDataList} 
          editContents={setStatusDataList}
          getPrevContents={getData}
          updateDB={updateDB}　/>
      </div>
      <div className={classes.items}>
        {statusDataList.map((status) => (
          <StatusItem text={status} isEditMode={false} index={0} handleDelete={null}/>
        ))}
      </div>
    </div>
  );
};

export default Status;
