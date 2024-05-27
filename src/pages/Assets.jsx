import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = [ "Category", "Description", "Quantity","Damaged","In Use","Purchase date", "Service date", "Price", "Value"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function Assets() {
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Assets'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default Assets