const Producto = require('../models/product');

exports.init = (req, resp) => {
  // resp.send('Hola mundo desde rutas y controladores').end();
  resp.render('index')
}

exports.admin = (req, resp) => {
  resp.render('admin')
}

exports.create = (req, resp) => {
  console.log('body:', req.body);
  let data = new Producto({
    nombre: req.body.name,
    precio: req.body.price,
    descripcion: req.body.description,
    fecha: new Date()
  })  // Producto

  data.save((err,resp)=>{
    if (err)  console.log(err)
    else console.log(resp);
  })
}
