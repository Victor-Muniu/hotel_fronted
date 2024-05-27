import React, {useState} from 'react'
import MUIDataTable from 'mui-datatables'
import {Box, Button, Modal} from '@mui/material'
import ChefsLadderForm from '../form/ChefsLadderForm'
const columns = ["Date", "Unit", "Name", "O.S", "Issued", "R.T", "Sold","C.S", "Remarks"]
const options = { 
    filterType: "checkbox",
    rowsPerPage: 25
}
function ChefsLadder() {
  const [showForm, setShowForm] = useState(false);

  const handleAddExpenseClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };
  return (
    <Box width='100%' display='flex' flexDirection='column' justifyContent='space-around' gap={4}>
        {!showForm && (
        <Button variant="contained" color="primary" onClick={handleAddExpenseClick}>
          Add Into Chef's Ladder
        </Button>
      )}
      <Modal
        open={showForm}
        onClose={handleClose}
        aria-labelledby="expense-form-title"
        aria-describedby="expense-form-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Box width='50%'>
          <ChefsLadderForm onClose={handleClose} />
        </Box>
      </Modal>
        <MUIDataTable 
        title='Chefs Ladder'
        columns={columns}
        options={options}/>
    </Box>
  )
}

export default ChefsLadder