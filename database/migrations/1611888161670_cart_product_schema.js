'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CartProductSchema extends Schema {
  up () {
    this.create('cart_product', (table) => {
      table.increments()
      table.integer('cart_id').unsigned().notNullable()
      table.foreign('cart_id').references('carts.id')

      table.integer('product_id').unsigned().notNullable()
      table.foreign('product_id').references('products.id')

      table.timestamps()
    })
  }

  down () {
    this.drop('cart_product')
  }
}

module.exports = CartProductSchema
