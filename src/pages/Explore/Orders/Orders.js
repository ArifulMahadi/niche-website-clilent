import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Orders.css'

const Orders = () => {
    const {user} = useAuth()
    const handleSubmit = e => {
        e.preventDefault()
        alert('submitting')
    }
    return (
        <Container>
           <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={8}>
                <Typography variant="body1" gutterBottom>
                          place your order </Typography>
                    <form onSubmit = {handleSubmit} >
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Your Name"
                             name="name"
                             defaultValue={user.displayName}
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Your Email"
                            defaultValue={user.email}
                             name="email"
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="your adress"
                            variant="standard"/>
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="your phone number"
                            type = "number"
                            variant="standard"/> 
                            <br/>
                            <Button style={{marginTop:"10px"}} type='submit' variant="contained">Submit</Button>

      
                    </form>
                    
                </Grid>
                <Grid item xs={12} md={4}>
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default Orders;