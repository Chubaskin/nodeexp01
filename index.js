const express = require('express');
const app = express();
const Rutas = require('./routes/rutas');
const jade = require('jade');
const mongoose = require('mongoose');
const formidable = require('express-formidable');
const cloudinary = require('cloudinary');

let port = process.env.PORT || 3000;

app.use( formidable({
  encoding: 'utf-8',
  uploadDir: './static/uploads',
  keepExtensions: true,
  multiples: true
}));

// Uso de Jade
app.set('views', './views');
app.set('view engine', 'jade');
    // Uso de bodyParser
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({extended: true}));
// "set" cambia la configuracion global de express
// "use" indica módulos externos a usar

cloudinary.config({
  cloud_name: 'chubasco',
  api_key: '939127124223932',
  api_secret: 'T7NrQPu3BoisxEvOONpBsOyH9ZQ'
});


// Rutas estáticas
app.use(express.static('./static'));

// Esta línea tiene que ir al final para tomar las configuraciones
app.use('/', Rutas);
// app.use('/myapp', Rutas);

mongoose.connect('mongodb://admin:123Momia@ds062339.mlab.com:62339/tallernode', err => {
  if (err)  console.log(err)
  else console.log('Conectado a la BD' );
});

app.listen(port, err => {
  if (err)  console.log(err)
  else console.log(`Servidor OK en puerto ${port}` );
});
