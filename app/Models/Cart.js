'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cart extends Model {

  // order(){
  //   return this.belongsTo("App/Models/Order")
  // }

  customer(){
    return this.hasOne("App/Models/Customer")
  }

    products(){
    return this.belongsToMany("App/Models/Product")
  }
}

module.exports = Cart
