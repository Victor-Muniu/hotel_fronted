import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import { Box, Button, Modal, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PurchaseForm from '../form/PurchaseForm';

const Purchases = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/consolidated-purchases', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  const handleAddExpenseClick = () => {
    setEditItem(null);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setEditItem(null);
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setShowForm(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/consolidated-purchases/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
    }
  };

  const handleFormSubmit = async (item) => {
    try {
      if (editItem) {
        // Update existing item
        await axios.patch(`http://localhost:3001/api/consolidated-purchases/${editItem.id}`, item, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(data.map((i) => (i.id === editItem.id ? { ...i, ...item } : i)));
      } else {
        // Add new item
        const response = await axios.post('http://localhost:3001/api/consolidated-purchases', item, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData([...data, response.data]);
      }
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
    } finally {
      handleClose();
    }
  };

  const columns = [
    { name: "date", label: "Date" },
    { name: "category", label: "Category" },
    { name: "amount", label: "Amount" },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => {
          const item = data[tableMeta.rowIndex];
          return (
            <div>
              <IconButton onClick={() => handleEditClick(item)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteClick(item.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          );
        }
      }
    }
  ];

  const options = {
    filterType: "checkbox",
    rowsPerPage: 25,
  };

  return (
    <Box width='100%' display='flex' flexDirection='column' justifyContent='space-around' gap={4}>
      {!showForm && (
        <Button variant="contained" color="primary" onClick={handleAddExpenseClick}>
          Add Purchase
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
          <PurchaseForm onClose={handleClose} onSubmit={handleFormSubmit} editItem={editItem} />
        </Box>
      </Modal>
      <MUIDataTable
        title='Consolidated Purchases'
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default Purchases;
