const express = require('express');
const app = express();
const Rutas = require('./routes/rutas');

let port = process.env.PORT || 3000;

app.use('/', Rutas);

app.listen(port, err => {
  if (err)  console.log(err)
  else console.log(`Servidor OK en puerto ${port}` );
});
