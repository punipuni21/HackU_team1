import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StatusItem from '../molecules/StatusItem';

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
            <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <StatusItem text={props.text+num} />
                ))}
            </div>
        </div>
    );
}


export default Status;
