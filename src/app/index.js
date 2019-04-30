//dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Routes 
import AppRoutes from './routes';


//assets
/*import './index.css';*/


render(<BrowserRouter>
			<AppRoutes /> 	
      </BrowserRouter>, 
 document.getElementById('app'));

