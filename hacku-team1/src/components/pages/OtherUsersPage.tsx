import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Search from "../organisms/Search";
import UsersBlock from "../organisms/UsersBlock";

import { db } from "../../firebase/firebase";

const useStyles = makeStyles({
  h4: {
    textAlign: "left",
    marginLeft: "20px",
    marginBottom: "20px",
  },
});

type Props = {
  uid: string | null;
  setOtherUid: any;
};

const OtherUsersPage: React.FC<Props> = ({ uid, setOtherUid }) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  const [usersOrig, setUsersOrig] = useState<{
    [key: string]: {
      user: { displayName: string; iconURL: string };
      userid: string;
      status: { useID: string; content: string }[];
    };
  }>();

  const [users, setUsers] = useState<{
    [key: string]: {
      user: { displayName: string; iconURL: string };
      userid: string;
      status: { useID: string; content: string }[];
    };
  }>();

  // 初期マウント時に発火する
  // Firestoreからデータを取得
  useEffect(() => {
    GetAllUserData();
  }, []);

  useEffect(() => {
    if (!text) setUsers(usersOrig);
  }, [text]);

  // 全てのユーザの情報を取得、uidをハッシュ値に変数を格納する。
  // 全てのStatusを取得、status.userIDをハッシュ値に変数のstatusを更新する
  const GetAllUserData = () => {
    let usersInfo: any = [];
    db.collection("User")
      .get()
      .then((response) => {
        // then()の中は逐次処理となるので上から実行していく。
        response.forEach((userDocument) => {
          usersInfo[userDocument.id] = {
            user: userDocument.data(),
            userid: userDocument.id,
            status: [],
          };
        });

        db.collection("Status")
          .get()
          .then((response) => {
            response.forEach((statusDocument) => {
              let status = statusDocument.data();

              usersInfo[status.userID].status.push(status);
            });
            setUsersOrig(usersInfo);
            setUsers(usersInfo);
          });
      });
  };

  const inputValue = (e: any) => {
    setText(e.target.value);
  };
  const filterList = () => {
    let Usercopy: { [key: string]: any } = {};
    usersOrig &&
      Object.keys(usersOrig).forEach((value) => {
        if (
          usersOrig[value].user.displayName
            .toLowerCase()
            .indexOf(text.trim().toLowerCase()) > -1
        ) {
          Usercopy[value] = usersOrig[value];
        }
      });
    setUsers(Usercopy);
  };

  return (
    <Container>
      <Box mt={2}>
        <Search text={text} onChange={inputValue} onClick={filterList} />
      </Box>
      {users && Object.keys(users).length !== 0 ? (
        users && <UsersBlock Users={users} setOtherUid={setOtherUid} />
      ) : (
        <h3 className={classes.h4}>該当のおすすめ待ちびとはいませんでした</h3>
      )}
    </Container>
  );
};

export default OtherUsersPage;
