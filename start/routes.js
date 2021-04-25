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

//Stripe
Route.get('checkout/checkout', 'CheckoutController.checkout').as('checkout')
Route.post('checkout/process', 'CheckoutController.processPayment')


//login
Route.post('/api/user/login', 'LoginController.login');
Route.post('/api/user', 'LoginController.register');
Route.get('/api/user/profile', 'LoginController.profile')

//API React cart
Route.get('/api/cart', 'ReactCartController.getCart').middleware(['auth:api']);
Route.put('/api/cart', 'ReactCartController.updateCart').middleware(['auth:api'])

//LoginWithTokenController
Route.get('/api/loginWithToken', 'LoginWithTokenController.login')



//users
Route.get('/register', 'UserController.create')
Route.post('/register', 'UserController.processCreate')
Route.get('/user/login', 'UserController.login').as('userLogin')
Route.post('/user/login', 'UserController.processLogin');
Route.get('/user/logout', 'UserController.logout').as('userLogout')
//react
Route.get('/reactFlavours', "ReactController.reactFlavours")
Route.get('/reactTopping', "ReactController.reactToppings")
Route.get('/reactSugar', "ReactController.reactSugars")
//Route.get('/react/create',"ReactController.create")
Route.post('/react/create',"ReactController.create")

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
Route.get('/cart/show', "CartController.show").as('cart')

//customers
Route.get('/customers/show', "CustomerController.index").as('customers.show')
Route.get('/customers/create', "CustomerController.create")
Route.post('/customers/create', "CustomerController.processCreate")
Route.get('/customers/:user_id/update', "CustomerController.update")
Route.post('/customers/:user_id/update', "CustomerController.processUpdate")
Route.get('/customers/login', 'CustomerController.login').as('userLogin')
Route.post('/customers/login', 'CustomerController.processLogin');
Route.get('/customers/logout', 'CustomerController.logout').as('userLogout')








Route.on('/').render('welcome').as('home')




