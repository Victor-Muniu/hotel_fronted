import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const RequisitionForm = () => {
  
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
        Requisition Form
      </Typography>
      {requisitions.map((requisition, index) => (
        <Box key={index} component="form" sx={{ mt: 2, width: '100%' }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="Staff Name" variant="outlined" />
            <TextField fullWidth label="Banquetting group" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="Quantity" variant="outlined" />
            <TextField fullWidth label="Date" variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label="Item Name" variant="outlined" />
            <TextField fullWidth label="Department being requested" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            
            <TextField fullWidth label="Department requesting" variant="outlined" />
          </Box>
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={addRequisition}>
        Add Requisition
      </Button>
    </Box>
  );
};

export default RequisitionForm;
