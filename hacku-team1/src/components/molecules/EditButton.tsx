import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EditDialog from './EditDialog'

interface Props {
    style: string;
    contents: string[];
    editContents: any;
    updateDB: VoidFunction;
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
                className={props.style}
                onClick={handleOpen}
            >
                <ExpandMoreIcon />
            </IconButton>
            <EditDialog
                title={"何の初心者?"}
                contents={props.contents}
                editContents={props.editContents}
                isOpen={open}
                doClose={() => handleClose()}
                updateDB={props.updateDB}
            />
        </React.Fragment>
    )
}

export default EditButton;