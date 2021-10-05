import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import img1 from '../../image/logo.png'

const Header = () => {
  return (
    <div>
    
      <header className='header'>
        <div className="img-div">
            <img className="logo" src={img1} alt="" />
        </div>

        <nav className='navbar'>
          <ul>
          <Link className='links' to='/'>
          Home
          </Link>
            <Link className='links' to='/about'>About</Link>
            <Link className='links' to='/services'>Services</Link>
            <Link className='links' to='/contact'>SingUP</Link>
          </ul>
        </nav>
      </header>





    </div>
  );
};

export default Header;