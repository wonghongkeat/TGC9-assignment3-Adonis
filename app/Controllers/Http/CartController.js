'use strict'

const Product = use("App/Models/Product")
const Flavour = use("App/Models/Flavour")
const Topping = use("App/Models/Topping")
const Sugar = use("App/Models/Sugar")


class CartController {
  create({view}){
    let products = Product.all()
    let flavours = Flavour.all()
    let toppings = Topping.all()

    return view.render('cart/create',{
      products:products.JSON()

    })
  }
}

module.exports = CartController
