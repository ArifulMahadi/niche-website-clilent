import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Orders.css'

const Orders = () => {
    const {user} = useAuth()
    const initialInfo = {displayName:user.displayName, email:user.email,phone:''}
    const [orderInfo,setOrderInfo] = useState(initialInfo)
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...orderInfo};
        newInfo[field] = value;
        console.log(newInfo)
        setOrderInfo(newInfo)

    }
    const handleSubmit = e => {
        e.preventDefault()
        const orders = {
            ...orderInfo,    
        }
        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('success')   
            }
            setOrderInfo('')
        })
        // setOrderInfo("")
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
                             name="displayName"
                             onBlur={handleOnBlur}
                             defaultValue={user.displayName}
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="Your Email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                             name="email"
                            variant="standard" />
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="your adress"
                            name="adress"
                            onBlur={handleOnBlur}
                            variant="standard"/>
                        <TextField
                            sx={{width:"75%", m:1}}
                            id="standard-basic"
                            label="your phone number"
                            name="phone"
                            type = "number"
                            onBlur={handleOnBlur}
                            variant="standard"/> 
                            <br/>
                            <Button type='submit' style={{marginTop:"10px"}}  variant="contained">Submit</Button>
                    </form>
                    
                </Grid>
                <Grid item xs={12} md={4}>
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default Orders;