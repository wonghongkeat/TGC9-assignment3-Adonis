'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
//flavours
Route.get('/flavours', 'FlavourController.index')
Route.get('/flavours/create', "FlavourController.create")
Route.post('/flavours/create', "FlavourController.processCreate")
//product
Route.get('/product/create', "ProductController.create")
Route.post('/product/create', "ProductController.processCreate")
//customers
Route.get('/customers/show', "CustomerController.index")
Route.get('/customers/create', "CustomerController.create")
Route.post('/customers/create', "CustomerController.processCreate")
Route.get('/customers/:user_id/update', "CustomerController.update")
Route.post('/customers/:user_id/update', "CustomerController.processUpdate")
