'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cart extends Model {

  order(){
    return this.belongsTo("App/Models/Order")
  }

    products(){
    return this.belongsToMany("App/Models/Product")
  }
}

module.exports = Cart
