import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ChefsLadderForm = ({ onClose }) => {
  
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
      }}
    >
      <Typography variant="h4" gutterBottom>
        Chef's Ladder Form
      </Typography>
      {requisitions.map((requisition, index) => (
        <Box key={index} component="form" sx={{ mt: 2, width: '100%' }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth  variant="outlined" type='date'/>
            <TextField fullWidth label="Unit" variant="outlined" type='number' />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label='Name' variant="outlined"/>
            <TextField fullWidth label="Opening Stock" variant="outlined" type='number' />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label='Issued' variant="outlined" type='number'/>
            <TextField fullWidth label="R.T" variant="outlined" type='number' />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField fullWidth label='Sold' variant="outlined" type='number'/>
            <TextField fullWidth label="Closing Stock" variant="outlined" type='number' />
          </Box>
          <TextField fullWidth 
          label= 'Remarks' variant='outlined' multiline rows={4} sx={{mb: 2}}/>
        </Box>
      ))}
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" onClick={addRequisition}>
          Add Chef's Ladder
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default ChefsLadderForm;
