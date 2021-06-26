import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import StatusDialog from './StatusDialog'

interface Props {
    style: string;
}

const EditButton: React.FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <IconButton 
                // style={{marginTop: "5px"}}
                className={props.style}
                onClick={handleOpen}
            >
                <ExpandMoreIcon />
            </IconButton>
            <StatusDialog
                title={"何の初心者"}
                isOpen={open}
                doClose={() => handleClose()}
            />
        </React.Fragment>
    )
}

export default EditButton;