const Producto = require('../models/product');
const cloudinary = require('cloudinary');

exports.init = (req, resp) => {
  // resp.send('Hola mundo desde rutas y controladores').end();
  Producto.find((err, respuesta) => {
    if (err)  console.log(err)
    else {
      resp.render('index', {producto : respuesta});
    }
  });
}

exports.admin = (req, resp) => {
  resp.render('admin')
}

exports.create = (req, resp) => {
  // console.log('body:', req.files.fileimage.path);

  cloudinary.uploader.upload(req.files.fileimage.path, result => {
      let data = new Producto({
        nombre: req.fields.name,
        precio: req.fields.price,
        descripcion: req.fields.description,
        imagen: req.fields.fileimage,
        fecha: new Date()
      })  // Producto

      data.save((err,respuesta)=>{
        if (err)  console.log(err)
        else {
          console.log('Todo OK!')
          resp.redirect('/');
        }

      })

  });

}
