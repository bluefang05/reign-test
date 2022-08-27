import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./FilteredSwitch.css";

export default function FilterSwitch() {
  return (
    <Stack spacing={0} direction="row">
      <Button variant="outlined">All</Button>
      <Button variant="outlined">My faves</Button>
    </Stack>
  );
}
