'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  sugar() {
    return this.belongsTo("App/Models/SugarLevel")
  }
  flavour(){
    return this.belongsTo("App/Models/Flavour")
  }

  topping_product(){
    return this.hasMany("App/Models/ProductTopping")
  }
    cartProduct(){
    return this.hasMany('App/Models/CartProduct')
  }
}

module.exports = Product
