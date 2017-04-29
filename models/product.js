const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Producto = new Schema({
  nombre : String,
  precio : Number,
  descripcion: String,
  fecha: Date
})

module.exports = mongoose.model('Producto', Producto)
