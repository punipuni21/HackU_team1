import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    name: string;
}

const useStyles = makeStyles((theme) => ({
    h1: {
        textAlign: 'left',
    },
}));

const UserName = (props: Props) => {
    const classes = useStyles();
    return (
        <h1 className={classes.h1}>{props.name}</h1>
    );
}


export default UserName;
