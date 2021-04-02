'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCartToUserSchema extends Schema {
  up () {
    this.table('customers', (table) => {
      // alter table
      table.text('cart_content')
    })
  }

  down () {
    this.table('customers', (table) => {
      // reverse alternations
      table.drop('cart_content')
    })
  }
}

module.exports = AddCartToUserSchema
