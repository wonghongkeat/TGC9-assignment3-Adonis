'use strict'

const customer = use("App/Models/Customer")
const Sugar = use("App/Models/SugarLevel")
const Flavour = use("App//Models/Flavour")
const Product = use("App/Models/Product")
const Topping = use("App/Models/Topping")
const Cart = use("App/Models/Cart")

class CartController {
  async show({view,response}){

    //  async show({view,response,params}){
    // let cart = await Customer.find(params.id)
    //  let product = await cart.products().with("flavour").with("sugar").fetch()


  let cart = await Cart.query().with("products").with("products.flavour").with("products.sugar").with("products.toppings").fetch()
  return view.render("cart/show",{
    cart:cart.toJSON(),

    })
response.json(cart)
  }
}

module.exports = CartController
