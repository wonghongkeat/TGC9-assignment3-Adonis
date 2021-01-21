'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductTopping extends Model {
    product(){
    return this.belongsTo("App/Models/Product")
  }

  topping(){
    return this.belongsTo("App/Models/topping")
  }
}

module.exports = ProductTopping
