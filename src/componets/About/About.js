import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './About.css'


const About = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/about.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div>
            <h2 className="text-primary">Popular about Courses</h2>
            <div className="row p-5 gy-4 bg-color">
            
                {data.map((about) => {
                    const { corse, price, img, service} = about;
                    return (
                        <>
                        
                            <div
                                className="col-lg-4  color"
                                key={corse}>

                                       <div class="card" style={{width: "18rem"}}>
                                      
                                    <div class ="card-body color">
                                    <img src={img} class="card-img-top" alt="..." />
                                     <h3>Corse: {corse}</h3>
                                    <h5 class ="card-title">price: {price}</h5>
                                    <p>Store:  {service}</p>
                                    <Button  class ="btn btn-primary">Details here</Button>
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

export default About;

