import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Date", "Item", "Supplier Name", "Price", "Quantity", "LPO No"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function Lpo() {
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='LPO'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default Lpo