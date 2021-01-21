'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
   cart(){
    return this.hasMany('App/Models/Cart')
  }

  customer(){
    return this.belongsTo('App/Models/Customer')
  }
}

module.exports = Order
