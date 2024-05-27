import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Date", "Item", "Supplier Name", "Price", "Quantity", "Received By"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function Received() {
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Received'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default Received