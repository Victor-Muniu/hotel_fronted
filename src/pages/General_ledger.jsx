import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { Box, Button, Modal, IconButton } from '@mui/material';
import General_ledgerForm from '../form/General_ledgerForm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const General_ledger = () => {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/general-ledger', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
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
      await axios.delete(`http://localhost:3001/api/general-ledger/${id}`, {
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
        await axios.patch(`http://localhost:3001/api/general-ledger/${editItem.id}`, item, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(data.map((i) => (i.id === editItem.id ? { ...i, ...item } : i)));
      } else {
        const response = await axios.post('http://localhost:3001/api/general-ledger', item, {
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
    { name: "description", label: "Description" },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          const item = data[tableMeta.rowIndex];
          return (
            <Box>
              <IconButton onClick={() => handleEditClick(item)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteClick(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        }
      }
    }
  ];

  const options = {
    filterType: "checkbox",
    rowsPerPage: 25
  };

  return (
    <Box width='100%' display='flex' flexDirection='column' justifyContent='space-around' gap={4}>
      {!showForm && (
        <Button variant="contained" color="primary" onClick={handleAddExpenseClick}>
          Add A Ledger
        </Button>
      )}
      <Modal
        open={showForm}
        onClose={handleClose}
        aria-labelledby="ledger-form-title"
        aria-describedby="ledger-form-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Box width='50%'>
          <General_ledgerForm onClose={handleClose} onSubmit={handleFormSubmit} editItem={editItem} />
        </Box>
      </Modal>
      <MUIDataTable
        title='General Ledger'
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default General_ledger;
