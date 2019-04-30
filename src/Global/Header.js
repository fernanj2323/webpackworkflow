// Dependencies 
import React, { Component } from 'react';
import PropTypes from 'prop-types'; //es una validacion que nos ayuda a definir que propiedades debemos recibir
                                   // de que tipo y ver si son necesarias o requeridas o si son enviadas como null

import { Link } from 'react-router-dom'; //con esto podemos impolementar el complemento de links 

/// Assets  
/*import logo from './images/logo.svg';*/
/*import './css/Header.css';*/


class Header extends Component {

/*  static propTypes = { 
    title:  PropTypes.string.isRequired,  //explicamos que el titulo es un valor requerido de tipo string. 
    items:  PropTypes.array.isRequired   //explicamos que el items es un valor requerido de tipo array.


  };
*/
  render() {

     
     const { title, items } = this.props; //mostramos por props en consola
    console.log(items);
    return (







<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div>
     <a class="navbar-brand" href="#">{ title }</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
           </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li class="nav-item active">
                    <a class="nav-link" href="#">Home 
                                      <span class="sr-only">
                                      (current)
                                      </span>
                    </a>
                  </li>
              </ul>
          </div>

              <li className="Menu"> 
               {
                 items && items.map
               (
                 (item, key) => <li key={key}><Link class="text-Black" to={item.url}>{item.title}</Link></li>

                )
              } 
            </li> 
  </div>
</nav>
    );
  }
}

export default Header;
