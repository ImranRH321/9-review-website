import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './Home.css'

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/homeData.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (  
<div>
<section className='showcase'>
      <div className='showcase-overlay'>
        <h1>Get Your <span> Education </span> today!</h1>
        <p>
      
        </p>
      </div>
    </section>
        <div className='Backgroun-img'>
          <h2>Home scetion</h2>
            <h2 className="text-primary">Popular home Courses</h2>
            <div className="row p-5 gy-4 bg-muted">
            
                {data.slice(0,6).map((home) => {
                    const { name, email,online, img } = home;
                    return (
                        <>
                        
                            <div
                                className="col-lg-4  color"
                                key={home}>

                                       <div class="card" style={{width: "18rem"}}>
                                    <img src={img} class="card-img-top" alt="..." />
                                    <div class ="card-body">
                                     <h3>Corse: {online}</h3>
                                    <p>email: {email}</p>
                                    <h5 class ="card-title">name: {name}</h5>
                                    <Button  class ="btn btn-dark">Details here</Button>
                                    </div>
                                </div>

                            </div>
                        </>
                    );
                })}
            </div>
        </div>
        </div>

    );
};

export default Home;

