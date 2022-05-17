import React from 'react';
import {Stack} from '@mui/material';

const Home = () => {
    let userName = "sandesh"
  return (
    <Stack sx={{height:"80vh",justifyContent:"center",alignItems:"center"}}>
        <h2>Welcome to home page</h2>
        <h1>{userName}</h1>
    </Stack>
  )
}

export default Home