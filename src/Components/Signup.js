import React from 'react';
import { Box, Grid, Stack, Typography, Card, TextField, Button, CardContent, Avatar } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { useState } from 'react';

const Users =[];

const Signup = () => {
  const [signupDetail, setSignUpDetail] = useState({
    fName:"",
    lName:"",
    email:"",
    phone:"",
    password:"",
  });

  const handleChange=(e)=>{
    const name = e.target.id;
    const value = e.target.value;
    setSignUpDetail({...signupDetail,[name]:value});
   

  }
  const handleSubmit=(e)=>{
   e.preventDefault();
   Users.push(signupDetail);
   setSignUpDetail({fName:"",lName:"",email:"",phone:"",password:""});
   localStorage.setItem("users",JSON.stringify(Users));
  // console.log(Users);
  }
  return (
    <Box sx={{ height: "80vh" }}>
      <Stack justifyContent="center" fullWidth alignItems="center">

        <Card sx={{ width: 600, padding: 3, mt: 2 }}>
        <CardContent >
          <form action="" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{mb:3}}>  
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <Avatar sx={{ width: 48, height: 48,backgroundColor:'maroon' }}> <Lock /></Avatar>
                  <Typography variant="h2" color="initial">Sign up</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="fName" label="First Name"  required={true} value={signupDetail.fName} onChange={handleChange} fullWidth={true}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="lName" label="Last Name" fullWidth={true} required={true} value={signupDetail.lName} onChange={handleChange}/>
              </Grid>
              <Grid item xs={12} >
                <TextField type="email" id="email" label="Email" fullWidth={true} required={true} value={signupDetail.email} onChange={handleChange}/>
              </Grid>
              <Grid item xs={12} >
                <TextField type="number" id="phone" label="Phone" fullWidth={true} required={true} value={signupDetail.phone} onChange={handleChange}/>
              </Grid>
              <Grid item xs={12} >
                <TextField type="password" id="password" label="Password" fullWidth={true} required={true} value={signupDetail.password} onChange={handleChange}/>
              </Grid>
              <Grid item xs={12} >
                <Button type="submit"variant="contained" fullWidth={true}>Signup</Button>
              </Grid>
            </Grid>
          </form>
         
            
            </CardContent>
        </Card>
        {/* <Button variant="outlined" color="default">Sign Up</Button> */}
      </Stack>
    </Box>
  )
}

export default Signup