import React from "react";
import User from "../organisms/User";
import Status from "../organisms/Status";
import Recommended from "../organisms/Recommended";
import Complete from "../organisms/Complete";
import { db } from "../../firebase/firebase";

<<<<<<< HEAD
const UserPage = () => {
  let statusDataList: any = [];
  let recommendedDataList: any = [];
  let completeDataList: any = [];

  const getStatusData = async () => {
    const userRef = await db
      .collection("User")
      .doc("H4hqSRxo27OJy0800T9iWRjZOvu2")
      .get();
    statusDataList = userRef.get("statusIDs");
    console.log("Document data:", statusDataList);

    // userRef.get("statusIDs").forEach((element: string) => {
    //   const statusRef = await db.collection("Status").doc(element).get();
    // });
  };

  const getRecommendedData = async () => {
    const userRef = await db
      .collection("User")
      .doc("H4hqSRxo27OJy0800T9iWRjZOvu2")
      .get();
    recommendedDataList = userRef.get("tipsIDs");
    console.log("Document data:", recommendedDataList);
  };

  const getCompleteData = async () => {
    // await db
    //   .collection("User")
    //   // .where("done", "==", true)
    //   .get()
    //   .then((snapshots) => {
    //     snapshots.docs.map((doc) => {
    //       completeDataList.push({
    //         src: doc.data().imageURL,
    //         alt: doc.data().content,
    //         text: doc.data().content,
    //         statusids: doc.data().statusIDs,
    //         tipsids: doc.data().tipsIDs,
    //       });
    //     });
    //     console.log(completeDataList);
    //   });
  };

  getStatusData();
  getRecommendedData();
  getCompleteData();

=======
type Props = {
  uid: string | null;
};

const UserPage: React.FC<Props> = ({ uid }) => {
>>>>>>> develop
  return (
    <div>
      <User name="asdf" icon="/logo192.png" />
      <Status text="test_status" />
      <Recommended text="test_recommended" />
      <Complete text="test_complete" />
    </div>
  );
};

export default UserPage;
