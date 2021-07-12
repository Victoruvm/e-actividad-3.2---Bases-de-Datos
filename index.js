const express = require ("express");
const app = express();
const morgan = require("morgan");

require('./Objs/BSmysql');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


//Rutas
app.use('/api/components', require('./Objs/routes/components.routes.js'));



app.listen(3000, () => { console.log('Servidor en puerto 3000')});