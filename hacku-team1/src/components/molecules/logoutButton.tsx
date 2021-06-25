import React from "react";
import OutlineButton from "../atoms/outlineButton";

import firebase from "../../firebase";

type Props = {
  className: string;
};

const LogoutButton: React.FC<Props> = ({ className }) => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <OutlineButton className={className} label="Logout" onClick={logout} />
  );
};

export default LogoutButton;
