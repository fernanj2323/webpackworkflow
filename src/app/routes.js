// Dependencies 
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter} from 'react-router-dom'; 

//componentes 
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog'; 
import Home  from './components/Home';
import Page404 from './components/Page404';

//la siguiente funcion hace que las rutas que hagamos funcionen como una especie de swithch 
// donde haga match con una de esas rutas, ejecuta entonces esa ruta. 
// todo lo que esta dentro de <App> es tomado como children 
const AppRoutes = () => 
 <App> 
  	<Switch>
  	<Route exact path = "/About" component= {About} />
  	<Route exact path = "/Contact" component= {Contact}/> 
  	<Route exact path = "/Blog" component= {Blog}/> 
  	<Route exact path = "/" component= {Home}/> 
  	<Route component = {Page404} />  
  	</Switch> 
 </App>;

 export default AppRoutes; 