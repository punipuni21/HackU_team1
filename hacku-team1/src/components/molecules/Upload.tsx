import React, { useState, useEffect, useCallback } from "react";

// import * as firebase from 'firebase/app';
import firebase from "firebase/app";
import { firebaseApp } from "../../firebase/firebase";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import {
  Typography,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Button,
  IconButton,
  Paper,
  CircularProgress,
} from "@material-ui/core/";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import InfoIcon from "@material-ui/icons/Info";

import { useDropzone } from "react-dropzone";

// スタイルを適用する
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      "& > *": {
        margin: theme.spacing(3),
      },
    },
    dropzone: {
      width: "100%",
      height: 200,
      boxSizing: "border-box",
      borderWidth: 2,
      borderColor: "#666666",
      borderStyle: "dashed",
      borderRadius: 5,
      verticalAlign: "top",
      marginRight: "2%",
    },
    thumbsContainer: {
      marginTop: 16,
    },
    gridList: {
      width: "100%",
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    icon: {
      color: "white",
    },
    upButton: {
      color: "secondary",
      margin: theme.spacing(3),
    },
    circular: {
      textAlign: "center",
    },
  })
);

// previewを追加
type MyFile = File & {
  preview: string;
};

type Props = {
  uploading: boolean;
  files: MyFile[];
  progress: number;

  setImageURL: any;
  setFiles: React.Dispatch<React.SetStateAction<MyFile[]>>;
};

// Dropzoneの設定
const acceptFile = "image/*";
const maxFileSize = 1048576;

export default function Upload(props: Props) {

  // State
  // const [files, setFiles] = useState<MyFile[]>([]);
  // const [uploading, setUploading] = useState(false);
  // const [progress, setProgress] = useState(0);

  const classes = useStyles(props);

  /*
  ドロップした時の処理
  */
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("onDrop");

    // previewの追加
    props.setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );

  }, []);

  // Dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptFile,
    minSize: 0,
    maxSize: maxFileSize,
  });

  // const onUpload = async () => {
  //   console.log("onUpload start");

  //   // ローディングをOn。progressを初期化
  //   setUploading(true);
  //   setProgress(0);

  //   function uploadImageAsPromise(file: File) {
  //     console.log("uploadImageAsPromise start");

  //     // アップロード先のファイルパスの作成
  //     const file_name = file.name;
  //     const storageRef = firebaseApp
  //       .storage()
  //       .ref()
  //       .child("images/" + file_name);

  //     return new Promise(function (resolve, reject) {
  //       //Upload file
  //       var task = storageRef.put(file);

  //       //Update progress bar
  //       task.on(
  //         firebase.storage.TaskEvent.STATE_CHANGED,
  //         function progress(snapshot) {
  //           var percent =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log(percent + "% done");
  //         },
  //         function error(err) {
  //           // 失敗時
  //           console.log("upload error");
  //           reject(err);
  //         },
  //         function complete() {
  //           // 成功時
  //           console.log("upload complete.");
  //           task.then(function (snapshot: firebase.storage.UploadTaskSnapshot) {
  //             resolve(snapshot.ref.getDownloadURL());
  //           });
  //         }
  //       );
  //     })
  //       .then(function (downloadURL) {
  //         console.log("Finished uploading file: " + file_name);

  //         // progressを更新する
  //         setProgress((oldProgress) => oldProgress + 1);
  //         return downloadURL;
  //       })
  //       .catch(function () {
  //         console.log("Error:uploadImageAsPromise");
  //       });
  //   }

  //   // 複数のファイルアップロードをPromise.allで並列に実行する
  //   const file = files[0]
  //   // const result = (new Promise(uploadImageAsPromise(file)));
  //   const result = uploadImageAsPromise(file)
  //   Promise.all( [ result ] ).then( function ( imageURL ) {
  //     console.log("Upload result");
  //     console.log(imageURL);
  //     props.setImageURL(imageURL);

  //     // ローディングを終了し、リストを空に
  //     setUploading(false);
  //     setProgress(0);
  //     setFiles([]);

  //   } );
  // };

  // アップロード中はCircularを表示する
  if (props.uploading === true) {
    const percent = Math.round((props.progress / props.files.length) * 100);
    console.log("Loadingの表示。Progreass:" + props.progress + " Percent:" + percent);

    return (
      <Grid container className={classes.root} spacing={3} justify="center">
        <Grid item xs={6}>
          <Paper variant="outlined" elevation={3} className={classes.paper}>
            <CircularProgress
              // className={classes.circular}
              // variant="determinate"
              value={percent}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  } else {
    // タイルを敷き詰められるように、一部画像のサイズは大きくする
    const tile_cols = 3;
    let tile_featured: any = [];
    switch (props.files.length % tile_cols) {
      case 0:
        tile_featured = [];
        break;
      case 1:
        tile_featured = [0, props.files.length - 1];
        break;
      case 2:
        tile_featured = [0];
        break;
    }

    // サムネイルの作成
    const thumbs = props.files.map((file, index) => (
      <GridListTile
        key={file.preview}
        cols={tile_featured.indexOf(index) >= 0 ? 2 : 1}
        rows={1}
      >
        <img src={file.preview} alt={file.name} />
        <GridListTileBar
          title={file.name}
          subtitle={file.size}
          actionIcon={
            <IconButton
              aria-label={`star ${file.name}`}
              className={classes.icon}
            >
              <InfoIcon />
            </IconButton>
          }
          actionPosition="left"
          className={classes.titleBar}
        />
      </GridListTile>
    ));

    // const diabled_button = files.length === 0;

    return (
      <Grid container className={classes.root} spacing={3} justify="center">
        <Grid item xs={6}>
          <Paper variant="outlined" elevation={3} className={classes.paper}>
            <Typography variant="h4">Upload image files to GCS</Typography>
            <div>
              <Paper className={classes.dropzone} {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </Paper>
              {/* <Button
                onClick={onUpload}
                variant="outlined"
                color="primary"
                disabled={diabled_button}
                className={classes.upButton}
                startIcon={<CloudUploadIcon />}
              >
                Upload
              </Button> */}
              <aside className={classes.thumbsContainer}>
                <GridList
                  cellHeight={200}
                  className={classes.gridList}
                  cols={tile_cols}
                >
                  {thumbs}
                </GridList>
              </aside>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
