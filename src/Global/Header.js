    
// Dependencies 
import React, { Component } from 'react';
import PropTypes from 'prop-types'; //es una validacion que nos ayuda a definir que propiedades debemos recibir
                                   // de que tipo y ver si son necesarias o requeridas o si son enviadas como null

import { Link } from 'react-router-dom'; //con esto podemos impolementar el complemento de links 

/// Assets  
/*import logo from './images/logo.svg';*/
/*import './css/Header.css';*/


class Header extends Component {


  render() {

     
     const { title, items } = this.props; //mostramos por props en consola
    console.log(items);
    return (



<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">{ title }</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link">

         <Link to="/">Home</Link>
        
         <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" >
        
        <Link to="/Blog">Blog</Link>

        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
        
        <Link to="/About">About Us</Link>

        </a>
      </li>

       <li class="nav-item">
        <a class="nav-link" href="#">
        
         <Link to="/Contact">Contact Us  </Link>
        
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>






</nav>
    );
  }
}

export default Header;