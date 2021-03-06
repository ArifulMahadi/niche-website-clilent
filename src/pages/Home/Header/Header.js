import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/system';

const Header = () => {
    const {user,logout} = useAuth()
    return (
        <div className="header">
            <Link style={{textDecoration:"none",fontSize:'19px',color:'white'}} to="/home">Home</Link>
            <Link style={{textDecoration:"none",fontSize:'19px', marginLeft:"20px",color:'white'}} to="/explore">Explore</Link> 
               { user?.email ?  
                   <div className='dashboard'>
                        <Link style={{textDecoration:"none",fontSize:'19px', marginLeft:"20px",color:'white',display:"inline"}} to="/dashboard">Dashboard</Link>
                    
                    <button onClick={logout} style={{border:"none",fontSize:'19px', marginLeft:"20px",backgroundColor:"teal",padding:"10px",borderRadius:"10px",color:"white"}}>Log Out</button> 
                   </div>              :
                <Link style={{textDecoration:"none",fontSize:'19px', marginLeft:"20px",color:'white'}} to="/login">Login</Link>
                }
           
        </div>
    );
};

export default Header;