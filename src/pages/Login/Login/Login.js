import { Container, Grid, TextField, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React,{useState} from 'react';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const [loginData,setLoginData] = useState({})
   const {user, loginUser,loading,authError} = useAuth()
   const location = useLocation()
   const history = useHistory()

    const handleOnChange = e => {
        e.preventDefault()
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        loginUser(loginData.email,loginData.password,location,history)
    }
    return (
        <Container>
           <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={8}>
                <Typography variant="body1" gutterBottom>
                          Login
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Your Email"
                             name="email"
                             onChange = {handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Your password"
                            type = "password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"/>
                            <Button 
                            sx={{width:"75%", m:1}}
                            variant="contained" 
                            type="submit"
                            >Login</Button>
                            <Link to="/register">
                            <Button 
                            variant="text"
                            >New User?Please Register
                            </Button>
                            </Link>
                            {
                        loading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Login successfully!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    </form>
                </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;