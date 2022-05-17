import React from 'react';
import { Box, Grid, Stack, Typography, Card, TextField, Button, CardContent, Avatar } from '@mui/material';
import { Login as Log } from '@mui/icons-material';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { authAction } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginDetail, setLoginDetail] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setLoginDetail({ ...loginDetail, [name]: value });


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(loginDetail);
        const users= localStorage.getItem("users");
        const user = JSON.parse(users);
        if(user){
            const mainUser = user.find(user=>user.email===loginDetail.email);
            if (loginDetail.email === mainUser.email && loginDetail.password === mainUser.password) {
                dispatch(authAction.login());
                navigate('/',{replace:true})
            }
        }
        else {
            alert("user not registered");
        }
        setLoginDetail({email:"",password:""});

    }
    return (
        <Box sx={{ height: "80vh" }}>
            <Stack justifyContent="center" fullWidth alignItems="center">

                <Card sx={{ width: 600, padding: 3 }}>
                    <CardContent>
                        <form action="" onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ mb: 3 }}>
                                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                        <Avatar sx={{ width: 48, height: 48,backgroundColor:'purple' }}> <Log /></Avatar>
                                        <Typography variant="h2" color="initial">Login</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField type="email" id="email" label="Email" fullWidth={true} required value={loginDetail.email} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField type="password" id="password" label="Password" fullWidth={true} required value={loginDetail.password} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} >
                                    <Button type='submit' variant="contained" fullWidth={true}>Login</Button>
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

export default Login