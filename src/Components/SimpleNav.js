import * as React from 'react';
import { AppBar } from '@mui/material';
import { Box, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import styled from '@emotion/styled';

const Links = styled(Link)({
  textDecoration: 'none',
})

export default function Navbar() {
  const isAuth = useSelector(state => state.isAuthenticated);
  return (
    <Box mb={8}>
      <AppBar position='static' sx={{ padding: 2 }}>
        {/* <Toolbar> */}
        <Stack justifyContent="space-between" direction="row" alignItems="center" pl={10} pr={10}>
          <Links to="/"><Typography variant="h6" component="div" sx={{ color: "white" }}>
            LogSys
          </Typography></Links>
          {!isAuth && <Stack direction="row" spacing={2}>
            <Links to="/signup"><Button variant="contained" sx={{ backgroundColor: 'red', textDecoration: 'none' }}>Sign up </Button></Links>
            <Links to="/login"> <Button variant="contained" sx={{ backgroundColor: 'green', textDecoration: 'none' }}>login </Button></Links>
          </Stack>}

        </Stack>
        {/* </Too lbar> */}
      </AppBar>
    </Box>
  );
}
