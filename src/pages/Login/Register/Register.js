import { Container, Grid, TextField, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const [loginData,setLoginData] = useState({});
    const {user,registerUser,loading,authError} = useAuth();
    const history = useHistory()

    const handleOnBlur = e => {
        e.preventDefault()
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        if(loginData.password !== loginData.password2){
            alert('your password did not match')
        }
        registerUser(loginData.email, loginData.password,loginData.name,history)
    }

    return (
        <Container>
           <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={8}>
                <Typography variant="body1" gutterBottom>
                          Please Register </Typography>
                   {!loading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Your Name"
                             name="name"
                             onBlur = {handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                             name="email"
                             onBlur = {handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Your password"
                            type = "password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"/>
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Retype Your password"
                            type = "password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"/>
                            <Button 
                            sx={{width:"75%", m:1}}
                            variant="contained" 
                            type="submit"
                            >Register</Button>
                            <Link to="/login">
                            <Button 
                            variant="text"
                            >Already Register?Please Login
                            </Button>
                            </Link>
                    </form>}
                    {
                        loading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User created successfully!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                
                </Grid>
                <Grid item xs={12} md={4}>
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;