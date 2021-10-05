import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



const Services = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div>
            <h2 className="text-primary mt-5">Popular Service Courses</h2>
            <div className="row p-5 gy-4 bg-muted">
            
                {data.map((service) => {
                    const {corses, email, phone, img } = service;
                    return (
                        <>
                        
                            <div
                                className="col-11 col-lg-4 col-xxl-4 bg-muted"
                                key={Services}>

                                       <div className="card" style={{width: "18rem"}}>
                                  
                                    <div className="card-body color">
                                    <img src={img} class="card-img-top" alt="..." />
                                    <h5 class ="card-title">corses: {corses}</h5>
                                    <p>email: {email}</p>
                                     <p>phone: {phone}</p>
                                    <Button className="btn btn-primary">Details here</Button>
                                    </div>
                                </div>

                            </div>
                        </>
                    );
                })}
            
            </div>
       
        </div>


    );
};

export default Services;

