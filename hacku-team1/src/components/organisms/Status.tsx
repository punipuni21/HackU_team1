import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StatusItem from "../molecules/StatusItem";
import {
  Box,
  Chip,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
  Fab,
} from "@material-ui/core";

import EditButton from "../molecules/EditButton";
import { db } from "../../firebase/firebase";
import DecoratedHead from "../molecules/DecoratedHead";
import CheckCircle from "@material-ui/icons/CheckCircle";
import BiginnerIcon from "../atoms/BeginnerIcon";
import { StayPrimaryLandscape } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";

interface Props {
  text: string;
  myUid: string | null;
  otherUid: string | null;
}

const useStyles = makeStyles((theme) => ({
  items: {
    // marginLeft: "40px",
  },
  editButton: {
    marginTop: "5px",
  },
}));

async function createStatusOnDB(content: string, uid: string | null) {
  try {
    await db.collection("Status").add({
      content: content,
      userID: uid,
    });
  } catch (error) {
    console.log("新たなStatuの作成に失敗 : content = " + content);
  }
}

async function deleteStatusFromDB(
  content: string,
  myUid: string | null,
  otherUid: string | null
) {
  await db
    .collection("Status")
    .where("userID", "==", otherUid)
    .where("content", "==", content)
    .get()
    .then(async (snapshot) => {
      snapshot.docs.map((doc) => {
        db.collection("Status").doc(doc.id).delete();
      });
    });
}

const Status = (props: Props) => {
  const classes = useStyles();
  const [statusDataList, setStatusDataList] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getData();
  }, [props.otherUid]);

  const updateDB = async () => {
    // 追加されたリストから重複の削除
    const uniqueContents = [...new Set(statusDataList)];

    // 直前の要素をDBからもう一度取
    const rowData: string[] = [];
    await db
      .collection("Status")
      .where("userID", "==", props.otherUid)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          rowData.push(doc.data().content);
        });

        // 2つのリストの差分をとる
        // 追加されるもの
        const createdItems = uniqueContents.filter(
          (item) => rowData.indexOf(item) === -1
        );

        // 削除されるもの
        const deletedItems = rowData.filter(
          (item) => uniqueContents.indexOf(item) === -1
        );

        // DBに格納
        createdItems.map((item) => {
          createStatusOnDB(item, props.otherUid);
        });
        // DBから削除
        deletedItems.map((item) => {
          deleteStatusFromDB(item, props.myUid, props.otherUid);
        });

        setStatusDataList(uniqueContents);
      });
  };

  const getData = async () => {
    const rowData: string[] = [];
    await db
      .collection("Status")
      .where("userID", "==", props.otherUid)
      .get()
      .then(async (snapshots) => {
        // eslint-disable-next-line array-callback-return
        snapshots.docs.map((doc) => {
          rowData.push(doc.data().content);
        });
      });
    setStatusDataList(rowData);
  };

  return (
    <div>
      <Box borderBottom={2} color="primary.main" mb={3} pb={1}>
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <Box mt={0.5}>
              <BiginnerIcon
                size={28}
                color="#bb4d54"
                style={{ marginRight: "0.5rem" }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h2">何のしろうと？</Typography>
          </Grid>
          <Grid item>
            {props.myUid === props.otherUid && (
              <EditButton
                style={classes.editButton}
                contents={statusDataList}
                editContents={setStatusDataList}
                updateDB={updateDB}
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
              />
            )}
          </Grid>
        </Grid>
      </Box>
      <div className={classes.items}>
        {props.myUid === props.otherUid && statusDataList.length === 0 ? (
          // <Chip
          //   variant="outlined"
          //   label="右上の「…」ボタンから2つ以上追加してみよう！"
          // />
          <Box mb={3}>
            <Fab variant="extended" color="primary" onClick={handleOpen}>
              あなたが初心者であるものを設定しましょう！
              <AddIcon />
            </Fab>
          </Box>
        ) : (
          statusDataList.map((status) => (
            <StatusItem
              text={status}
              isEditMode={false}
              index={0}
              handleDelete={null}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Status;
