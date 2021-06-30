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
      height: "200%",
      boxSizing: "border-box",
      borderWidth: 2,
      borderColor: "#666666",
      borderStyle: "dashed",
      borderRadius: 5,
      verticalAlign: "top",
      marginRight: "2%",
    },
    thumbsContainer: {
      marginTop: 8,
    },
    gridList: {
      width: "100%",
      // height: 450,
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
const maxFileSize = 5242880; // 5MB

export default function Upload(props: Props) {
  const classes = useStyles(props);

  /*
  ドロップした時の処理
  */
  const onDrop = useCallback((acceptedFiles: File[]) => {

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
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: acceptFile,
    minSize: 0,
    maxSize: maxFileSize,
    multiple: false
  });

  // アップロード中はCircularを表示する
  if (props.uploading === true) {
    const percent = Math.round((props.progress / props.files.length) * 100);

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
    const tile_cols = 2;
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

    return (
      <Grid container className={classes.root} spacing={3} justify="center">
        <Grid item xs={12}>
          <Paper variant="outlined" elevation={3} className={classes.paper}>
            <div>
              {props.files.length === 0 ? (
                <React.Fragment>
                <Paper className={classes.dropzone} {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? <p>ドロップ</p> : <p>画像をアップロード(5MBまで)</p>}
                </Paper>
                </React.Fragment>
              ) : (
                <aside className={classes.thumbsContainer}>
                  <GridList
                    cellHeight="auto"
                    className={classes.gridList}
                    cols={tile_cols}
                  >
                    {thumbs}
                  </GridList>
                </aside>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
