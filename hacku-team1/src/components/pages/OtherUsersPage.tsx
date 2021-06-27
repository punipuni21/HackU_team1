import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
};

const OtherUsersPage: React.FC<Props> = ({ uid }) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  const [usersOrig, setUsersOrig] =
    useState<{
      [key: string]: {
        user: { displayName: string; iconURL: string };
        status: { useID: string; content: string }[];
      };
    }>();

  const [users, setUsers] =
    useState<{
      [key: string]: {
        user: { displayName: string; iconURL: string };
        status: { useID: string; content: string }[];
      };
    }>();

  // 初期マウント時に発火する
  // Firestoreからデータを取得
  useEffect(() => {
    GetAllUserData();
  }, []);

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
    <div>
      <Search text={text} onChange={inputValue} onClick={filterList} />
      {users && Object.keys(users).length !== 0 ? (
        users && <UsersBlock Users={users} />
      ) : (
        <h3 className={classes.h4}>該当のおすすめ待ちびとはいませんでした</h3>
      )}
    </div>
  );
};

export default OtherUsersPage;
