import { Button } from '@mui/material';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <span>To Know More about us</span>
                <br/>
                <span>please contact us</span>
                <br/>
                <Button
                        style={{backgroundColor:"teal"}}
                         sx={{width:"75%", m:1}}
                         variant="contained" 
                         >About Us</Button>
            </div>
            <div className="footer">
                <span>copy right 2021</span>
            </div>
        </div>
    );
};

export default Footer;