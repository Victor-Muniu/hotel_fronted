import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Box } from '@mui/material'
const columns = [ "Group Name", "Checkin Date", "Checkout Date","Packs","Package type", "Status"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function Banqueting() {
  return (
    <Box  width='100%'>
        <MUIDataTable 
        title='Bangueting tracker'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default Banqueting