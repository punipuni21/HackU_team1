import React from 'react';
import Grid from '@material-ui/core/Grid';

import UserIcon from '../atoms/UserIcon';
import UserName from '../atoms/UserName';


interface Props {
    name: string;
    picture_src: string;
}

const User = (props: Props) => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <UserIcon picture_src={props.picture_src} />
                </Grid>
                <Grid item xs={9}>
                    <UserName name={props.name} />
                </Grid>
            </Grid>
        </div>
    );
}


export default User;
