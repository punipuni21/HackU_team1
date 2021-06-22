import React from "react";
import Image from "../atoms/Image";
import TextLabel from "../atoms/TextLabel";
import { classicNameResolver } from "typescript";

type Props = {
  src: string;
  alt: string;
  classname: string;
  text: string;
};

const Content: React.FC<Props> = ({ src, alt, classname, text }) => {
  return (
    <>
      <div>
      <Image
          src={src}
          alt={alt}
          classname={classname}
        ></Image>
        <TextLabel classname={classname} text={text}></TextLabel>
      </div>
    </>
  );
};

export default Content;
