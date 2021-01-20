'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
       table.integer('flavour_id').unsigned().notNullable()
      table.foreign('flavour_id').references('flavours.id')
      table.integer('topping_id').unsigned().notNullable()
      table.foreign('topping_id').references('toppings.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
