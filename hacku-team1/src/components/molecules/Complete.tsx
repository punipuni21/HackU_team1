import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecommendButton from '../atoms/RecommendButton';

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

const Complete = (props: Props) => {
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.title}>Complete</h2>
            <hr></hr>
            <div className={classes.parentItem}>
                <RecommendButton text={props.text} />
                <RecommendButton text={props.text + "2"} />
            </div>
        </div>
    );
}


export default Complete;
