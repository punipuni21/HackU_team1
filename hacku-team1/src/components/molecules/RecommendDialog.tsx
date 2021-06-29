import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  Icon
} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Box } from "@material-ui/core";

import firebase from "firebase/app";
import { db, firebaseApp } from "../../firebase/firebase";
import Upload from "../molecules/Upload";
import { error } from "console";

type Props = {
  myUid: string;
  docid: string;
  title: string;
  refURL: string;
  isOpen: boolean;
  isMyPage: boolean;
  isGoodInit: boolean;
  setIsGoodInit: any;
  goodNum: number;
  setGoodNum: any;
  doClose: () => void;
};

// previewを追加
type MyFile = File & {
  preview: string;
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
  },
  text: {
    width: "30em",
  },
  goodButton: {
    marginTop: 10,
    justifyContent: 'center'
  }
}));

const RecommendDialog = (props: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState<any>(""); // Promissの型の指定が複雑なので後回し
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState<MyFile[]>([]);
  const [isGood, setisGood] = useState(props.isGoodInit);

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const uploadData = async () => {
    console.log("Image onUpload start");

    // ローディングをOn。progressを初期化
    setUploading(true);
    setProgress(0);

    function uploadImageAsPromise(file: File) {
      console.log("uploadImageAsPromise start");

      // アップロード先のファイルパスの作成
      const file_name = file.name;
      const storageRef = firebaseApp
        .storage()
        .ref()
        .child("images/" + file_name);

      return new Promise(function (resolve, reject) {
        //Upload file
        var task = storageRef.put(file);

        //Update progress bar
        task.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          function progress(snapshot) {
            var percent =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(percent + "% done");
          },
          function error(err) {
            // 失敗時
            console.log("upload error");
            reject(err);
          },
          function complete() {
            // 成功時
            console.log("upload complete.");
            task.then(function (snapshot: firebase.storage.UploadTaskSnapshot) {
              resolve(snapshot.ref.getDownloadURL());
            });
          }
        );
      })
        .then(function (downloadURL) {
          console.log("Finished uploading file: " + file_name);

          // progressを更新する
          setProgress((oldProgress) => oldProgress + 1);
          return downloadURL;
        })
        .catch(function () {
          console.log("Error:uploadImageAsPromise");
        });
    }

    const file = files[0];
    // const result = (new Promise(uploadImageAsPromise(file)));
    const result = uploadImageAsPromise(file);
    result.then(async function (imageURL) {
      console.log("Upload result");
      console.log(imageURL);
      setImageURL(imageURL);

      const userRef = db.collection("Tips").doc(props.docid);
      await userRef
        .update({
          done: true,
          doneContent: input,
          imageURL: imageURL,
        })
        .then(() => {
          // 最後にいろいろな変数のリセット
          setUploading(false);
          setProgress(0);
          setFiles([]);
          setInput("");
          window.location.reload();
          setOpen(false);
          props.doClose();
        });
    });
  };

  const DeleteData = async () => {
    await db.collection("Tips").doc(props.docid).delete();
  };

  const handleCloseWithGoodUpdate = async () => {
    // 過去：falseで今：true => 新たに追加
    if (!props.isGoodInit && isGood) {
      await db.collection("Tips").doc(props.docid).update({
        "recommenderIDs" : firebase.firestore.FieldValue.arrayUnion(props.myUid)
      }).then(() => {
        props.setGoodNum(props.goodNum + 1)
        props.setIsGoodInit(isGood)
        setOpen(false);
        props.doClose();
      }).catch(error => {
        console.log(error);
      })
    } else if (props.isGoodInit && !isGood) { // 過去：trueで今：false => 配列から削除
      await db.collection("Tips").doc(props.docid).update({
        "recommenderIDs" : firebase.firestore.FieldValue.arrayRemove(props.myUid)
      }).then(() => {
        props.setGoodNum(props.goodNum - 1)
        props.setIsGoodInit(isGood)
        setOpen(false);
        props.doClose();
      }).catch(error => {
        console.log(error);
      })
    } else {  // それ以外は変化なしなのでスルー
      setOpen(false);
      props.doClose();
    }
  }

  const handleCloseWithUpload = () => {
    uploadData();
  };

  const handleCloseWithCancel = () => {
    setInput("");
    setFiles([]);
    setOpen(false);
    props.doClose();
  };

  const handleCloseWithDelete = () => {
    DeleteData();
    setInput("");
    setFiles([]);
    window.location.reload();
    setOpen(false);
    props.doClose();
  };

  return (
    <Dialog
      open={open}
      onClose={props.isMyPage ? (
          handleCloseWithCancel
          ):(
          handleCloseWithGoodUpdate
      )}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" className={classes.content}>
        {props.title}
      </DialogTitle>
      <DialogContent>
        <div className={classes.content}>
          <a href={props.refURL} target="_blank" rel="noopener noreferrer">
            おすすめのリンク
          </a>
        </div>
        { props.isMyPage ? (
          <React.Fragment>
            <div className={classes.content}>
              <Upload
                uploading={uploading}
                files={files}
                progress={progress}
                setImageURL={setImageURL}
                setFiles={setFiles}
              />
            </div>
            <form>
              <TextField
                className={classes.text}
                id="outlined-multiline-static"
                label="感想など"
                multiline
                rows={8}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                variant="outlined"
              />
            </form>
          </React.Fragment>
        ) : (
          <Box textAlign='center'>
            <Button
              variant="outlined"
              color={ isGood ? ("secondary") : ("primary")}
              className={classes.goodButton}
              endIcon={<FavoriteIcon />}
              onClick={ () => setisGood(!isGood)}
            >
              { isGood ? ("いいね済み") : ("いいね")}
            </Button>
          </Box>
          
        )}
      </DialogContent>
      <DialogActions>
        { props.isMyPage ? (
          <React.Fragment>
            <Button
            // onClick={handleCloseWithDelete}
            onClick={() => {
              if (window.confirm("本当にこのおすすめを削除しますか？"))
                handleCloseWithDelete();
            }}
            color="primary"
            >
              削除
            </Button>
            <Button
              onClick={handleCloseWithUpload}
              color="primary"
              disabled={files.length === 0 || input === ""}
            >
              投稿
            </Button>
            <Button onClick={handleCloseWithCancel} color="primary">
              キャンセル
            </Button>
          </React.Fragment>
        ) : (
          <Button 
            onClick={handleCloseWithGoodUpdate} 
            color="primary">
            戻る
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default RecommendDialog;
