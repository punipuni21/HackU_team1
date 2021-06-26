import React, { useEffect, useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StatusItem from "../molecules/StatusItem";
import { IconButton } from "@material-ui/core";

import EditButton from "../molecules/EditButton"
import { db } from "../../firebase/firebase";

interface Props {
  text: string;
  uid: string | null;
}

const useStyles = makeStyles((theme) => ({
  h2: {
    textAlign: "left",
    marginTop: "20px",
    marginRight: "0px",
    marginBottom: "10px",
    marginLeft: "20px",
  },
  items: {
    marginLeft: "40px",
  },
  editButton: {
    marginTop: "5px"
  }
}));

const Status = (props: Props) => {
  const classes = useStyles();
  const [statusDataList, setStatusDataList] = useState([{content: ""}]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const rowData: any = [];
    await db
      .collection("Status")
      .where("userID", "==", props.uid)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          rowData.push({
            content: doc.data().content,
          });
        });
      });
    setStatusDataList(rowData);
    // console.log(await Promise.all(statusDataList));
  };


  return (
    <div>
      <div style={{display: "flex"}}>
        <h2 className={classes.h2}>何の初心者？</h2>
        <EditButton 
          style={classes.editButton} 
          contents={statusDataList} 
          editContents={setStatusDataList}
          getPrevContents={getData}　/>
      </div>
      <div className={classes.items}>
        {statusDataList.map((status) => (
          <StatusItem text={status.content} isEditMode={false} index={0} handleDelete={null}/>
        ))}
      </div>
    </div>
  );
};

export default Status;
