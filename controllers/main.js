const Producto = require('../models/product');

exports.init = (req, resp) => {
  // resp.send('Hola mundo desde rutas y controladores').end();
  Producto.find((err, respuesta) => {
    if (err)  console.log(err)
    else {
      resp.render('index',{ producto: respuesta});
    }
  });
  resp.render('index')
}

exports.admin = (req, resp) => {
  resp.render('admin')
}

exports.create = (req, resp) => {
  console.log('body:', req.body);

  let data = new Producto({
    nombre: req.fields.name,
    precio: req.fields.price,
    descripcion: req.fields.description,
    fecha: new Date()
  })  // Producto

  data.save((err,resp)=>{
    if (err)  console.log(err)
    else
    resp.redirect('/');
  })
}
