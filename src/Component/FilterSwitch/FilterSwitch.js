import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./FilteredSwitch.css";

export default function FilterSwitch(props) {
  return (
    <Stack spacing={0} direction="row" className="button-options">
      <Button variant="outlined" onClick={props.setFalse}>All</Button>
      <Button variant="outlined" onClick={props.setTrue}>My faves</Button>
    </Stack>
  );
}
