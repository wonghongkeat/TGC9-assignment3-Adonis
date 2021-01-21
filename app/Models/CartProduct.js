'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CartProduct extends Model {
  cart(){
    return this.hasMany("App/Models/Cart")
  }
  product(){
    return this.hasMany("App/Models/Product")
  }
}

module.exports = CartProduct
