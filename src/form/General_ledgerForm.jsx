import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const General_ledgerForm = ({ onClose, onSubmit, editItem }) => {
  const [form, setForm] = useState({
    date: '',
    category: '',
    amount: '',
    description: ''
  });

  useEffect(() => {
    if (editItem) {
      setForm({
        date: editItem.date,
        category: editItem.category,
        amount: editItem.amount,
        description: editItem.description
      });
    }
  }, [editItem]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        gap: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Ledger Form
      </Typography>
      <TextField
        fullWidth
        label="Date"
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Amount"
        name="amount"
        type="number"
        value={form.amount}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" type="submit">
          {editItem ? 'Update' : 'Add'} Ledger
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default General_ledgerForm;
