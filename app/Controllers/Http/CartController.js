'use strict'

const Product = use("App/Models/Product")



class CartController {
  create({view}){
  let product = await Product.all()
  let  x = await Product.query().with("toppings").fetch()


    return view.render('cart/create',{
      products:products.JSON()

    })
  }
}

module.exports = CartController
