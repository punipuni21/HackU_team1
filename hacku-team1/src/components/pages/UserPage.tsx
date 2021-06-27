import React, { useEffect, useState } from "react";
import User from "../organisms/User";
import Status from "../organisms/Status";
import Recommended from "../organisms/Recommended";
import Complete from "../organisms/Complete";

type Props = {
  uid: string | null;
};

const UserPage: React.FC<Props> = ({ uid }) => {
  return (
    <div>
      <User name="asdf" icon="/logo192.png" />
      <Status text="test_status" uid={uid} />
      <Recommended uid={uid} />
      <Complete uid={uid} />
    </div>
  );
};

export default UserPage;
