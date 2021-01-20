'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FlavourSchema extends Schema {
  up () {
    this.create('flavours', (table) => {
      table.increments()
      table.string('tea',25).notNullable()
      table.integer('price').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('flavours')
  }
}

module.exports = FlavourSchema
