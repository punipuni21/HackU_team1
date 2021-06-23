import React from "react";
import Introduction from "../molecules/Introduction";
import ContentList from "../organisms/ContentList";
import { Container } from "@material-ui/core";

const TopPage: React.FC = () => {
  return (
    <Container>
      <h2>トップページ</h2>
      <Introduction></Introduction>
      <ContentList></ContentList>
    </Container>
  );
};

export default TopPage;
