'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductToppingSchema extends Schema {
  up () {
    this.create('product_topping', (table) => {
      table.increments()
      table.integer('product_id').unsigned().notNullable()
      table.foreign('product_id').references('products.id')

      table.integer('topping_id').unsigned().notNullable()
      table.foreign('topping_id').references('toppings.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_topping')
  }
}

module.exports = ProductToppingSchema
