import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = ["Staff Name", "Current remaining off days"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function OffTable() {
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Staff Off Tracker'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default OffTable