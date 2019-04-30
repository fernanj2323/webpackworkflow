//Dependencies 
import React, { Component } from 'react';
//  de esta forma validamos el componente children interno en react 
import PropTypes from 'prop-types'; 


//Assets 
/*import './css/Content.css';*/

class Content extends Component {
/*static propTypes = {
    body: PropTypes.object.isRequired 
  };
*/
  render() {
    console.log('Bandera'); //banderin para ver cuantas veces pasa por aqui. 

      const { body } = this.props; 

    return (
      <div className="Content">
      <h2> { body } </h2> 
    </div>
    );
  }
}

export default Content;
  