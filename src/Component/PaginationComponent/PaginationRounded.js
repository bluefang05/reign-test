import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded(props) {
    const handleChange = (event, value) => {
        props.setNumber(value);
        props.handleData();
    };

    return (
        <Stack spacing={2}>
            <Pagination  
                count={10} 
                variant="outlined" 
                shape="rounded" 
                page={props.page} 
                onChange={handleChange} 
            />
        </Stack>
    );
}
