'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  sugar() {
    return this.belongsTo("App/Models/SugarLevel", "sugar_id");
  }
  flavour(){
    return this.belongsTo("App/Models/Flavour")
  }

  toppings(){
    return this.belongsToMany("App/Models/Topping")
  }

  carts(){
    return this.belongsToMany("App/Models/Cart")
  }

}

module.exports = Product
