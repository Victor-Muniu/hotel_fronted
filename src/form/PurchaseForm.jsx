import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';

const PurchaseForm = ({ onClose, onSubmit, editItem }) => {
  const [form, setForm] = useState({
    date: '',
    category: '',
    amount: ''
  });

  useEffect(() => {
    if (editItem) {
      setForm({
        date: editItem.date,
        category: editItem.category,
        amount: editItem.amount
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
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2} p={4}>
      <TextField
        label="Date"
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
      />
      <TextField
        label="Amount"
        name="amount"
        type="number"
        value={form.amount}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit">
        {editItem ? 'Update' : 'Add'} Purchase
      </Button>
      <Button variant="outlined" color="secondary" onClick={onClose}>
        Cancel
      </Button>
    </Box>
  );
};

export default PurchaseForm;
