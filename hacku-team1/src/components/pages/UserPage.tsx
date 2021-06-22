import React from 'react';
import User from '../molecules/User';
import Status from '../molecules/Status';
import Recommended from '../molecules/Recommended';
import Complete from '../molecules/Complete';
// import Button from '../atoms/Button'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const UserPage = () => {
    return (
        <div>
            <User name="asdf" picture_src="/logo192.png" />
            <Status text="test_status" />
            <Recommended text="test_recommended" />
            <Complete text="test_complete" />
            {/* <Button text="qwer" onClick={() => ("asd")} /> */}

            {/* <Box component="span"> */}
            <Box component="div">
                <Button>btn</Button>
                <Button>btn2</Button>
                <Button>btn3</Button>
            </Box>

        </div>
    );
}


export default UserPage;
