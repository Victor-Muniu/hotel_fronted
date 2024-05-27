import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Name", "Amount", "Date", ]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function Creditors() {
    
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Creditors'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default Creditors