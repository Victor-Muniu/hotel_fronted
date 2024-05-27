import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const PayrollForm = ({ onClose, onSubmit, editItem }) => {
  const [form, setForm] = useState({
    staff_name: '',
    gross_income: '',
    nhif_deductions: '',
    nssf_deductions: '',
    paye: '',
    helb: '',
    housing_levy: ''
  });

  useEffect(() => {
    if (editItem) {
      setForm({
        staff_name: editItem.staff_name,
        gross_income: editItem.gross_income,
        nhif_deductions: editItem.nhif_deductions,
        nssf_deductions: editItem.nssf_deductions,
        paye: editItem.paye,
        helb: editItem.helb,
        housing_levy: editItem.housing_levy
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
        gap: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Payroll Form
      </Typography>
      <TextField
        fullWidth
        label="Staff Name"
        name="staff_name"
        value={form.staff_name}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Gross Income"
        name="gross_income"
        value={form.gross_income}
        onChange={handleChange}
        variant="outlined"
        type="number"
      />
      <TextField
        fullWidth
        label="NHIF Deductions"
        name="nhif_deductions"
        value={form.nhif_deductions}
        onChange={handleChange}
        variant="outlined"
        type="number"
      />
      <TextField
        fullWidth
        label="NSSF Deductions"
        name="nssf_deductions"
        value={form.nssf_deductions}
        onChange={handleChange}
        variant="outlined"
        type="number"
      />
      <TextField
        fullWidth
        label="PAYE"
        name="paye"
        value={form.paye}
        onChange={handleChange}
        variant="outlined"
        type="number"
      />
      <TextField
        fullWidth
        label="HELB"
        name="helb"
        value={form.helb}
        onChange={handleChange}
        variant="outlined"
        type="number"
      />
      <TextField
        fullWidth
        label="Housing Levy"
        name="housing_levy"
        value={form.housing_levy}
        onChange={handleChange}
        variant="outlined"
        type="number"
      />
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" type="submit">
          {editItem ? 'Update' : 'Add'} Payroll
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default PayrollForm;
