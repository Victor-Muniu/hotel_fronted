import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Name", "KRA Pin", "VAT No", "Address", "Zip code", "Contact Person", "Credit Limit", "Email", "Telephone No"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}

function Supplier() {
  const token = localStorage.getItem("token");
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/suppliers',{
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
    <Box  width='100%'>
        <MUIDataTable 
        title='Suppliers'
        data={data.map((item)=>([
          item.name,
          item.Kra_pin,
          item.Vat_no,
          item.address,
          item.zip_code,
          item.contact_person,
          item.credit_limit,
          item.email,
          item.telephone_no
        ]))}
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default Supplier