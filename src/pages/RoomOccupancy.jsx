import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Room No", "Block", "Clean","Vacant", "Report"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function RoomOccupancy() {
  const token = localStorage.getItem("token");
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/rooms',{
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
        title='Room Occupancy'
        data={data.map((item)=>([
          item.room_no,
          item.block,
          item.clean,
          item.vacancy,
          item.damage_report
        ]))}
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default RoomOccupancy