import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
      <ul>
        <li>
        <Link to='/home'> <button >Home</button></Link>
        </li>
        <li>
          <Link to="/contact"><button>SingUp</button></Link>
        </li>
      </ul>

      <ul>
        <li>
          <button>Privacy Policy</button>
        </li>
        <li>
          <button>Giveaway</button>
        </li>
      </ul>
        </div>
    );
};

export default Footer; 