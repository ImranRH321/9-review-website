import React from 'react';

const Error = () => {
    return (
        <div
        style={{
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          pading: '10px',
          marginTop: "50px"
        }}
      >  
       <h2 style={{color: 'red'}}>error 404 </h2> 
        <h1 style={{color: 'red'}} >Looks like the page you were looking for does not exist</h1>
       
      </div>
    );
};

export default Error;