import React from "react";
import TextLabel from "../atoms/TextLabel";
import Button from "../atoms/Button";
import { Container, Stack } from "@material-ui/core";

const Introduction: React.FC = () => {
  const handleClickButton = () => {
    alert("押した");
  };
  return (
    <>
      <Container fixed>
        <TextLabel
          classname="description"
          text="ここはアプリの紹介"
        ></TextLabel>
        <Stack direction="row" spacing={2}>
          <Button
            name="Sign Up"
            classname="sign-up"
            onClick={handleClickButton}
          ></Button>
          <Button
            name="Sign In"
            classname="sign-in"
            onClick={handleClickButton}
          ></Button>
        </Stack>
      </Container>
      <TextLabel
        classname="description"
        text="みんなに消化されたコンテンツ"
      ></TextLabel>
    </>
  );
};

export default Introduction;
