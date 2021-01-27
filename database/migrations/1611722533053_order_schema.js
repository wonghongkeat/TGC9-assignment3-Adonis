'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.date("date").notNullable()
      table.integer('customer_id').unsigned().notNullable()
      table.foreign('customer_id').references('customers.id')

      table.integer('cart_id').unsigned().notNullable()
      table.foreign('cart_id').references('carts.id')

      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
