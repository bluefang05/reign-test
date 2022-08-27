import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectComponent.css';

export default function SelectComponent(props){
    return (
      <Box sx={{ minWidth: 120 }} className="select-body">
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={props.defaultValue}
            value={props.defaultValue}
            onChange={props.onChange}
          >
            <MenuItem value={'select'} disabled>
              Select your news
            </MenuItem>
            {props.selectOptions.map((item, key) => (
              <MenuItem key={key} value={item.value}>
                <img src={item.icon} alt={item.icon}/> {item.valueName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    )
}