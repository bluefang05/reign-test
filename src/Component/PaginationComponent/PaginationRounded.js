import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './PaginationRounded.css';

export default function PaginationRounded(props) {
    const handleChange = (event, value) => {
        props.setNumber(value);
    };

    return (
        <Stack spacing={2} className="pagination">
            <Pagination  
                count={9} 
                variant="outlined" 
                shape="rounded" 
                page={props.page} 
                onChange={handleChange} 
                boundaryCount={2}
            />
        </Stack>
    );
}
