'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToppingSchema extends Schema {
  up () {
    this.create('toppings', (table) => {
      table.increments()
      table.string('topping',25).notNullable()
      table.integer('price').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('toppings')
  }
}

module.exports = ToppingSchema
