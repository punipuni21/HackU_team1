import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

interface Props {
    picture_src: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const UserIcon = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar alt="user icon" src={props.picture_src} />
        </div>
    );
}


export default UserIcon;
