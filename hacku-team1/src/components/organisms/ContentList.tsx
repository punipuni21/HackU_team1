import React from "react";
import Image from "../atoms/Image";
import TextLabel from "../atoms/TextLabel";
import { Stack } from "@material-ui/core";
import Content from "../molecules/Content";


const ContentList: React.FC = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Content
          classname={"hoge"}
          src="./logo192.png"
          alt={"画像"}
          text={"画像だよ"}
        ></Content>
        <Content
          classname={"hoge"}
          src="./logo192.png"
          alt={"画像"}
          text={"画像だよ"}
        ></Content>
        <Content
          classname={"hoge"}
          src="./logo192.png"
          alt={"画像"}
          text={"画像だよ"}
        ></Content>
      </Stack>
    </>
  );
};

export default ContentList;
