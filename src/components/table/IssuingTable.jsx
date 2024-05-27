import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Requisition No", "Issued Date", "Status", "Action","Person Issuing"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function IssuingTable() {
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Issuing form'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default IssuingTable