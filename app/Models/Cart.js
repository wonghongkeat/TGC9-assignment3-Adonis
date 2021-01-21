'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cart extends Model {
  customer(){
    return this.belongsTo('App/Models/Customer')
  }
  cartProduct(){
    return this.hasMany('App/Models/CartProduct')
  }

  order(){
    return this.belongsTo("App/Models/Order")
  }
}

module.exports = Cart
