// Dependencies 
import React, { Component } from 'react';
//  de esta forma validamos el componente children interno en react 
import PropTypes from 'prop-types'; 

//  componentes 
import Header from '../Global/Header';
import Content from '../Global/Content';
/*import Footer from './Global/Footer';*/
  
//data 
import items from '../Global/menu'; //importamos los items del componente menu. 

// antes de renderizar llamamos a children que es un objeto requerido. 
//luego en render lo volvemos una constante 
// y lo enviamos al componente content 
// el children es el html dentro de routes.js 
class App extends Component {
	/*static ropTypes = {
		children: PropTypes.object.isRequired 
	};*/
  render() {
  	const { children } = this.props;

 
    return (
      <div className="App">
      <Header title="LupaMERN" items={items} />  
      <Content body = {children} /> 
      
      </div>
    );
  }
}

export default App;
