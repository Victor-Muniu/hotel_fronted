import React,{useState, useEffect} from 'react'
import axios from 'axios';
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Fname", "Lname", "Role", "Email", "Emp No"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function Staff() {

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/staff');
      const data = response.data;
      console.log(data); 
      return data;
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
    }
  };
  
 
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await getData();
        setData(result);
      };
  
      fetchData()

  },[]) 


  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Staff'
        data={data.map((item) => ([
          item.fname,
          item.lname,
          item.role,
          item.email,
          item.emp_no,
          item.rt // Assuming "R.T" is a property in your data object
      ]))}
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default Staff