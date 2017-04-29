const Producto = require('../models/product');

exports.init = (req, resp) => {
  // resp.send('Hola mundo desde rutas y controladores').end();
  resp.render('index')
}

exports.admin = (req, resp) => {
  // resp.send('Hola mundo desde rutas y controladores').end();
  resp.render('admin')
}
