import React from "react";
import Introduction from "../molecules/Introduction";
import ContentList from "../organisms/ContentList";
import { Container } from "@material-ui/core";
import Content from "../molecules/Content";

const TopPage: React.FC = () => {
  const contents = [
    {
      classname: "content",
      src: "./logo192.png",
      alt: "画像",
      text: "画像1",
    },
    {
      classname: "content",
      src: "./logo192.png",
      alt: "画像",
      text: "画像2",
    },
    {
      classname: "content",
      src: "./logo192.png",
      alt: "画像",
      text: "画像3",
    },
    {
      classname: "content",
      src: "./logo192.png",
      alt: "画像",
      text: "画像4",
    },
  ];

  return (
    <Container>
      <Introduction></Introduction>
      <ContentList contents={contents}></ContentList>
    </Container>
  );
};

export default TopPage;
