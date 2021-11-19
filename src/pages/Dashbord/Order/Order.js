import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';

const Order = () => {
    const {user} = useAuth();
    const [order,setOrder] = useState([])
    

    
    useEffect( () => {
        const url =  `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    return (
        <div>
            <h2>order:{order.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Ordered List">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Contact Number</TableCell>
            <TableCell align="right">Ordered id</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.displayName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row._id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Order;