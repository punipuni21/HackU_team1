import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StatusItem from '../atoms/StatusItem';

interface Props {
    text: string;
}

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'left',
    },
}));

const Status = (props: Props) => {
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.title}>Status</h2>
            <hr></hr>
            <StatusItem text={props.text} />
            <StatusItem text={props.text + "2"} />
        </div>
    );
}


export default Status;
