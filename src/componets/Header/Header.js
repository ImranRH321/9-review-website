import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
    
       <nav class="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      Courses
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item px-3">
        <Link className='links' to='/'>
          Home
          </Link>
        </li>
        <li class="nav-item px-3">
        <Link className='links' to='/about'>About</Link>
        </li>
        <li class="nav-item px-3">
        <Link className='links' to='/services'>Services</Link>
        </li>
        <li class="nav-item px-3">
        <Link className='links' to='/contact'>SingUP</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




    </div>
  );
};

export default Header;