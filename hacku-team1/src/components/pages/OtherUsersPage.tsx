import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../organisms/Search";
import UsersBlock from "../organisms/UsersBlock";

const useStyles = makeStyles({});

const OtherUsersPage: React.FC = () => {
  const classes = useStyles();

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

  return (
    <div>
      <Search />
      <UsersBlock Users = {Users}/>
    </div>
  );
};

export default OtherUsersPage;
