import React from "react";
import User from "../organisms/User";
import Status from "../organisms/Status";
import Recommended from "../organisms/Recommended";
import Complete from "../organisms/Complete";
// import Button from '../atoms/Button'

type Props = {
  uid: string | null;
};

const UserPage: React.FC<Props> = ({ uid }) => {
  return (
    <div>
      <User name="asdf" icon="/logo192.png" />
      <Status text="test_status" />
      <Recommended text="test_recommended" />
      <Complete text="test_complete" />
      {/* <Button text="qwer" onClick={() => ("asd")} /> */}
    </div>
  );
};

export default UserPage;
