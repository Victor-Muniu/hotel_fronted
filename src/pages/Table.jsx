import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, TextField, Grid, Button, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Table 1', color: '#000080' },
  { name: 'Table 2', color: '#000080' },
  { name: 'Table 3', color: '#000080' },
  { name: 'Table 4', color: '#000080' },
  { name: 'Table 5', color: '#000080' },
  { name: 'Table 6', color: '#000080' },
  { name: 'Table 7', color: '#000080' }
];

const menuItems = [
  { name: 'Pineapple Fried Rice', price: 13 },
  { name: 'Pad Thai', price: 13 }
];

function Table() {
  const [order, setOrder] = useState([]);

  const addItemToOrder = (item) => {
    setOrder([...order, item]);
  };

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/pos')
  }

  return (
      <Box width='100%' boxShadow={'0 10px 15px rgba(0, 0, 0, 0.3)'} bgcolor="black" color="white">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">Table Selection</Typography>
          </Toolbar>
        </AppBar>
        <Box p={2}>
          <TextField fullWidth placeholder="Search" variant="outlined" color="secondary" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
        </Box>
        <Grid container spacing={2} p={2}>
          {categories.map((category) => (
            <Grid item xs={6} key={category.name}>
              <Box display='flex'  justifyContent='space-around' alignItems='center' paddingX={2} paddingY={4} style={{ backgroundColor: category.color }} onClick={handleClick} >
                    <Typography variant='body2'>{category.name}</Typography>
                    <Typography variant='body'>Status</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        
      </Box>
  );
}

export default Table;
