import { Box, Typography} from '@mui/material';
import React, { useState } from 'react'




function TimeHeader() {
   
    const [time, setTime] = useState();
    setInterval(() =>{
        setTime(new Date().toLocaleTimeString())
    }, 1000);
  return (
    <Box 
    display='flex' alignItems='center' justifyContent='space-between' paddingLeft={3} paddingRight={3}
    paddingTop={1} paddingBottom={1}>
        <Typography fontWeight='bold'>Current Time</Typography>
        <Typography fontWeight='medium'>{time}</Typography>
    </Box>
  )
}

export default TimeHeader