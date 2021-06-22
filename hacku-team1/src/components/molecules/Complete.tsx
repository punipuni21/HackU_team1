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
}));

const Complete = (props: Props) => {
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.title}>Complete</h2>
            <hr></hr>
            <div>
                <RecommendButton text={props.text} />
                <RecommendButton text={props.text + "2"} />
            </div>
        </div>
    );
}


export default Complete;
