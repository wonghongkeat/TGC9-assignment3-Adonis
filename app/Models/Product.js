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
}

module.exports = Product
