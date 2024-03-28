import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography } from '@mui/material';

export default function CheckboxLabels() {
  return (
    <>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked color='success' />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>

    <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} color='error'/>
    <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}/>


    <Typography variant='h3'>
      Nilesh
    </Typography>
    </>
  );
}



