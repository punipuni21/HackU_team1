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
    parentItem: {
        display: 'flex',
    }
}));

const Status = (props: Props) => {
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.title}>Status</h2>
            <hr></hr>
            <div className={classes.parentItem}>
                <StatusItem text={props.text} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
                <StatusItem text={props.text + "2"} />
            </div>
        </div>
    );
}


export default Status;
