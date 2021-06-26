import React, { useEffect, useState } from "react";
import User from "../organisms/User";
import Status from "../organisms/Status";
import Recommended from "../organisms/Recommended";
import Complete from "../organisms/Complete";
import { db } from "../../firebase/firebase";

type Props = {
  uid: string | null;
};

const UserPage: React.FC<Props> = ({ uid }) => {
  const [recommendedDataList, setRecommendedDataList] = useState([]);
  const [completeDataList, setCompleteDataList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const tmpRecommendedData: any = [];
    const tmpCompleteData: any = [];
    await db
      .collection("Tips")
      .where("userID", "==", uid)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          console.log(doc.data().content);
          if (doc.data().done) {
            tmpCompleteData.push({
              content: doc.data().content,
              imageURL: doc.data().imageURL,
              doneContent: doc.data().doneContent,
            });
          } else {
            tmpRecommendedData.push({
              content: doc.data().content,
            });
          }
        });
      });
    setRecommendedDataList(tmpRecommendedData);
    setCompleteDataList(tmpCompleteData);
  };

  console.log(recommendedDataList);
  console.log(completeDataList);

  return (
    <div>
      <User name="asdf" icon="/logo192.png" />
      <Status text="test_status" />
      <Recommended dataList={recommendedDataList} />
      <Complete text="test_complete" />
    </div>
  );
};

export default UserPage;
