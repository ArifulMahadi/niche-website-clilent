import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';

import './Service.css'

const Service = (props) => {
    const {name,description,image}=props.service
    
    return (
        <div className="service-container">
            <div className="image">
                <img src={image} alt=""/>
            </div>
            <div className="detail">
                <h2>{name}</h2>
                <p>{description}</p>
                <Link to="/order">
                <Button 
                         sx={{width:"75%", m:1}}
                         variant="contained" 
                         type="submit"
                         >Order Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Service;