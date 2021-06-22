import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

interface Props {
    text: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
}));

const StatusItem = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Chip
                label={props.text}
            />
        </div>
    );
}


export default StatusItem;
