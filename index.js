const express = require('express');
const app = express();
const Rutas = require('./routes/rutas');
const bodyParser = require('body-parser');
const jade = require('jade');

let port = process.env.PORT || 3000;

// Uso de Jade
app.set('views', './views');
app.set('view engine', 'jade');
// Uso de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// "set" cambia la configuracion global de express
// "use" indica módulos externos a usar

// Esta línea tiene que ir al final
app.use('/', Rutas);

app.listen(port, err => {
  if (err)  console.log(err)
  else console.log(`Servidor OK en puerto ${port}` );
});
