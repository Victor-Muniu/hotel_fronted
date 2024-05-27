import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Date", "Category", "Sub Category", "Description", "Amount"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function ProfitLoss() {
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Profit & Loss Account'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default ProfitLoss