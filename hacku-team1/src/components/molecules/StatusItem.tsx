import React from 'react';
import Chip from '@material-ui/core/Chip';

interface Props {
    text: string;
}

const StatusItem = (props: Props) => {
    return (
        <Chip label={props.text} />
    );
}


export default StatusItem;
