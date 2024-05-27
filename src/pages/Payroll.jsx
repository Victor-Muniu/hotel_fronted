import React, {useState, useEffect} from 'react'
import MUIDataTable from 'mui-datatables'
import axios from 'axios'
import { Box, Button, Modal,IconButton } from '@mui/material'
import PayrollForm from '../form/PayrollForm'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}

function Payroll() {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  


  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/payrolls',{
        headers: {
          Authorization : ` ${token}`
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
  
      fetchData()

  },[]) 

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
      await axios.delete(`http://localhost:3001/api/payrolls/${id}`, {
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
        await axios.patch(`http://localhost:3001/api/payrolls/${editItem.id}`, item, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(data.map((i) => (i.id === editItem.id ? { ...i, ...item } : i)));
      } else {
        const response = await axios.post('http://localhost:3001/api/payrolls', item, {
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
    { name: "staff_Id", label: "Staff Id" },
    { name: "gross_income", label: "Gross Income" },
    { name: "nhif_deductions", label: "NHIF Deductions" },
    { name: "nssf_deductions", label: "NSSF Deductions" },
    { name: "paye", label: "PAYE" },
    { name: "net_income", label: "Net Income" },
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

  console.log(data)
  return (
    <Box width='100%' display='flex' flexDirection='column' justifyContent='space-around' gap={4}>
        {!showForm && (
        <Button variant="contained" color="primary" onClick={handleAddExpenseClick}>
          Add Payroll
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
          <PayrollForm onClose={handleClose} />
        </Box>
      </Modal>
        <MUIDataTable 
        title='Pay Roll'
        data={data}
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default Payroll