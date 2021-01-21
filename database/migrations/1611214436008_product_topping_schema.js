'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductToppingSchema extends Schema {
  up () {
    this.create('product_toppings', (table) => {
      table.increments()
      table.integer('topping_id').unsigned().notNullable()
      table.foreign('topping_id').references('toppings.id')

      table.integer('product_id').unsigned().notNullable()
      table.foreign('product_id').references('products.id')


      table.timestamps()
    })
  }

  down () {
    this.drop('product_toppings')
  }
}

module.exports = ProductToppingSchema
