import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../organisms/Search";
import UsersBlock from "../organisms/UsersBlock";

const useStyles = makeStyles({
  h4: {
    textAlign: "left",
    marginLeft: "20px",
    marginBottom: "20px",
  },
});

const OtherUsersPage: React.FC = () => {
  const Users = [
    {
      username: "Ikeda",
      setIcon: "ic",
      setTag1: "Art",
      setTag2: "Cook",
    },
    {
      username: "Shimazu",
      setIcon:
        "https://ca.slack-edge.com/T01PND95J8H-U01PDAP1F29-5cb0d1593ce3-512",
      setTag1: "Illust",
      setTag2: "Love",
    },
    {
      username: "Hase",
      setIcon: "hase",
      setTag1: "Soccer",
      setTag2: "Sing",
    },
  ];

  const classes = useStyles();
  const [text, setText] = useState('')
  const [users, setUsers] = useState(Users)
  const inputValue = (e: any) => {
    setText(e.target.value)
  }
  const filterList = () => {
    let Usercopy = []
    for (let user of Users) {
      if (user.username.toLowerCase().indexOf(text.trim().toLowerCase()) > -1){
       Usercopy.push(user)
      }
      setUsers(Usercopy)   
    }
  }

  const isLoggedIn = false
  return (
    <div>
      <Search text = {text} onChange={inputValue} onClick={filterList}/>
      {users.length == 0
        ? <h3 className={classes.h4}>該当のおすすめ待ちびとはいませんでした</h3>
        : <UsersBlock Users = {users}/>
      }
    </div>
  );
};

export default OtherUsersPage;
