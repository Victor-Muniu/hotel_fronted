import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, TextField, Grid, Button, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const categories = [
  { name: 'Starters', color: '#AEDFF7' },
  { name: 'Entrees', color: '#FFC0CB' },
  { name: 'Sandwiches', color: '#FFB6C1' },
  { name: 'Salads', color: '#90EE90' },
  { name: 'Main Course', color: '#FFB6C1' },
  { name: 'Kids', color: '#D8BFD8' },
  { name: 'Bar', color: '#AEDFF7' }
];

const menuItems = [
  { name: 'Pineapple Fried Rice', price: 13 },
  { name: 'Pad Thai', price: 13 }
];

function POS() {
  const [order, setOrder] = useState([]);

  const addItemToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <Box display="flex">
      {/* Left Section */}
      <Box flex={2} bgcolor="black" color="white">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">Table #12</Typography>
          </Toolbar>
        </AppBar>
        <Box p={2}>
          <TextField fullWidth placeholder="Search" variant="outlined" color="secondary" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
        </Box>
        <Grid container spacing={2} p={2}>
          {categories.map((category) => (
            <Grid item xs={6} key={category.name}>
              <Button fullWidth variant="contained" style={{ backgroundColor: category.color }}>
                {category.name}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} p={2}>
          {menuItems.map((item) => (
            <Grid item xs={6} key={item.name}>
              <Paper>
                <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography>{item.name}</Typography>
                    <Typography>${item.price.toFixed(2)}</Typography>
                  </Box>
                  <IconButton onClick={() => addItemToOrder(item)} color="primary">
                    <AddCircleOutlineIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Right Section */}
      <Box flex={1} bgcolor="white">
        <Box p={2}>
          <Typography variant="h6">Order Details</Typography>
          <Typography variant="body2">Table 12</Typography>
          <Typography variant="body2">Customer: Walk-in</Typography>
          <Divider />
          <List>
            {order.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
              </ListItem>
            ))}
          </List>
          <Button fullWidth variant="outlined" color="primary">+ Add Guest</Button>
          <Box mt={2}>
            <Typography variant="body2">Subtotal: ${(order.reduce((total, item) => total + item.price, 0)).toFixed(2)}</Typography>
            <Typography variant="body2">Tax: ${(order.reduce((total, item) => total + item.price, 0) * 0.1).toFixed(2)}</Typography>
            <Typography variant="h6">Total: ${(order.reduce((total, item) => total + item.price, 0) * 1.1).toFixed(2)}</Typography>
          </Box>
          <Button fullWidth variant="contained" color="secondary" style={{ marginTop: '20px' }}>CHECKOUT</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default POS;
