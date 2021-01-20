'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SugarLevelSchema extends Schema {
  up () {
    this.create('sugar_levels', (table) => {
      table.increments()
      table.string('level',3).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sugar_levels')
  }
}

module.exports = SugarLevelSchema
