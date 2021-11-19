import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Explore.css';

const Explore = () => {
    const [services, setServices] = useState([])
    
    useEffect ( () => {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then (data => setServices(data))
    } ,[]);
    // const handleAddToOrder = service => {
    //     const newOrders = {...order, service}
    //     setOrder(newOrders);
    // }

    return (
       
            <div className="explore-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        // handleAddToOrder={handleAddToOrder}
                        ></Service>)
                }
            </div>    
    );
};

export default Explore;