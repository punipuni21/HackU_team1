import React from "react";

type Props = {
  src: string;
  alt: string;
  classname: string;
};

const Image: React.FC<Props> = ({ src, alt, classname }) => {
  return <img src={src} alt={alt} className={classname}></img>;
};

export default Image;
