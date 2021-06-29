import React, { useEffect, useState } from "react";
import User from "../organisms/User";
import Status from "../organisms/Status";
import Recommended from "../organisms/Recommended";
import Complete from "../organisms/Complete";

type Props = {
  myUid: string | null;
  otherUid: string | null;
};

const UserPage: React.FC<Props> = ({ myUid, otherUid }) => {
  return (
    <div>
      <User myUid={myUid} otherUid={otherUid} />
      <Status text="test_status" myUid={myUid} otherUid={otherUid} />
      <Recommended myUid={myUid} otherUid={otherUid} />
      <Complete myUid={myUid} otherUid={otherUid} />
    </div>
  );
};

export default UserPage;
