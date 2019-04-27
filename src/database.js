//aqui configuramos la base de datos
// mongoose es un complemento isntalado que permite conectarnos 
// la constante URI es la coneccion a la DB 
//cambiamos la constante y cambia todo 
//luego de conectar solictamos que nos envie un msj por consla 
// y si hay un error que nos muestre el error

const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-stack-tasks';


mongoose.connect(URI)
// que diga por consola DB is conected 
		.then(db => console.log('DB is Connected'))
		// si hay un error que imprima por conssola el error 
		.catch(err => console.error(err)); 

module.exports = mongoose; 