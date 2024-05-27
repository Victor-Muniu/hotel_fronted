import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Requisition No", "Requester", "Department Requesting", "Department Requested", "Item", "Date of Request", "Quantity"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function RequisitionTable() {
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Request Tracker'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default RequisitionTable