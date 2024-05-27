import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const AssetForm = () => {
  
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
        Asset Form
      </Typography>
      {requisitions.map((requisition, index) => (
        <Box key={index} component="form" sx={{ mt: 2, width: '100%' }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="Category" variant="outlined" />
            <TextField fullWidth label="Description" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="Quantity" variant="outlined" type='number' />
            <TextField fullWidth label="Damaged" variant="outlined" type="number" />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="In use" variant="outlined" type='number'/>
            <TextField fullWidth  variant="outlined" type='date' />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth  variant="outlined" type='date'/>
            <TextField fullWidth label="Price" variant="outlined" type='number' />
          </Box>
          
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={addRequisition}>
        Add Asset
      </Button>
    </Box>
  );
};

export default AssetForm;
