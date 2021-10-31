import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function FilterSearch(props) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' ,margin:"2% auto",zIndex:2}}
      className="filter_bar"
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What are you looking for?"
        inputProps={{ 'aria-label': 'search google maps' ,className: "filterSearch"}}
        onChange={()=>props.filter()}
      />
      <IconButton type="submit" sx={{ p: '12px 15px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}