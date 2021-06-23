import React from "react";
import Introduction from "../molecules/Introduction";
import ContentList from "../organisms/ContentList";

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
    <div>
      <Introduction></Introduction>
      <ContentList contents={contents}></ContentList>
    </div>
  );
};

export default TopPage;
