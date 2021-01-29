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

Route.on('/').render('welcome').as('home')
//flavours
Route.get('/flavours', 'FlavourController.index').as('flavours.show')
Route.get('/flavours/create', "FlavourController.create")
Route.post('/flavours/create', "FlavourController.processCreate")
//topping
Route.get('/toppings', "ToppingController.index").as('toppings.show')
//product
Route.get(`/product/create`, "ProductController.create")
Route.post('/product/create', "ProductController.processCreate")
Route.get('/product/:id/show', "ProductController.show").as("showOne")
Route.get('/product/show', "ProductController.showProduct").as('product.show')
//cart
Route.get('/cart/create', "CartController.create").as('createCart')
Route.post('/cart/create', "CartController.processCreate")
//customers
Route.get('/customers/show', "CustomerController.index").as('customers.show')
Route.get('/customers/create', "CustomerController.create")
Route.post('/customers/create', "CustomerController.processCreate")
Route.get('/customers/:user_id/update', "CustomerController.update")
Route.post('/customers/:user_id/update', "CustomerController.processUpdate")
//customers
Route.get('/customers/login', 'CustomerController.login').as('userLogin')
Route.post('/customers/login', 'CustomerController.processLogin');
Route.get('/customers/logout', 'CustomerController.logout').as('userLogout')
