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
  const [statusDataList, setStatusDataList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const tmpData: any = [];
    await db
      .collection("Tips")
      .where("done", "==", true)
      .get()
      .then(async (snapshots) => {
        snapshots.docs.map((doc) => {
          tmpData.push({
            src: doc.data().imageURL,
            alt: doc.data().content,
            text: doc.data().content,
          });
        });
      });
    setStatusDataList(tmpData);
    console.log(await Promise.all(statusDataList));
  };


  return (
    <div>
      <div style={{display: "flex"}}>
        <h2 className={classes.h2}>何の初心者？</h2>
        <EditButton style={classes.editButton} />
      </div>
      
      
      <div className={classes.items}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <StatusItem text={props.text + num} />
        ))}
      </div>
    </div>
  );
};

export default Status;
