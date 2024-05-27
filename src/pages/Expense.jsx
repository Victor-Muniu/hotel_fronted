import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import { Box, Button, Modal } from '@mui/material';
import ExpenseForm from '../Accounts/ExpenseForm';

const columns = ["Date", "Category", "Amount", "Action"];
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
};

function Expense() {
  const [showForm, setShowForm] = useState(false);

  const handleAddExpenseClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const token = localStorage.getItem("token");
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/expenses',{
        headers: {
          Authorization : ` ${token}`
        }
      });
      const data = response.data;
      console.log(data); 
      return data;
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
    }
  };
  
 
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await getData();
        setData(result);
      };
  
      fetchData()

  },[]) 



  return (
    <Box width='100%' display='flex' flexDirection='column' justifyContent='space-around' gap={4}>
      {!showForm && (
        <Button variant="contained" color="primary" onClick={handleAddExpenseClick}>
          Add Expense
        </Button>
      )}
      <Modal
        open={showForm}
        onClose={handleClose}
        aria-labelledby="expense-form-title"
        aria-describedby="expense-form-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Box width='50%'>
          <ExpenseForm onClose={handleClose} />
        </Box>
      </Modal>
      <MUIDataTable 
        title='Expenses'
        data= {data.map((item)=>([
          item.date,
          item.category,
          item.amount
        ]))}
        columns={columns}
        options={options}
      />
    </Box>
  );
}

export default Expense;
