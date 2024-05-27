import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const InventoryForm = () => {
  
  const [requisitions, setRequisitions] = useState([{ id: 1 }]);


  const addRequisition = () => {
    const newId = requisitions.length + 1;
    setRequisitions([...requisitions, { id: newId }]);
  };

  return (
    <Box width='100%'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        margin: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Inventory Form
      </Typography>
      {requisitions.map((requisition, index) => (
        <Box key={index} component="form" sx={{ mt: 2, width: '100%' }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="Name" variant="outlined" />
            <TextField fullWidth label="Group" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="Description" variant="outlined" />
            <TextField fullWidth label="Price" variant="outlined" type="number" />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="Quantity" variant="outlined" type='number'/>
            <TextField fullWidth label="Spoilt" variant="outlined" type='number' />
          </Box>
          
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={addRequisition}>
        Add Inventory
      </Button>
    </Box>
  );
};

export default InventoryForm;
