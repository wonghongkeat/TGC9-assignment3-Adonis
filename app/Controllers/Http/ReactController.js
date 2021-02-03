'use strict'

const Flavour = use("App/Models/Flavour")
const Topping = use("App/Models/Topping")
const Sugar = use("App/Models/SugarLevel")
const Product = use("App/Models/Product")
const Cart = use("App/Models/Cart")


class ReactController {

  async reactFlavours({response}){
   let flavour = await Flavour.all()
 response.send(flavour)
}

 async reactToppings({response}){
   let topping = await Topping.all()
 response.send(topping)
}

 async reactSugars({response}){
   let sugar = await Sugar.all()
 response.send(sugar)
}
async create({request,response,auth}){
    let body = request.post()
    let newProduct = new Product()
    newProduct.sugar_id = body.sugar
    newProduct.flavour_id = body.flavour
    await newProduct.save()
    await newProduct.toppings().attach(body.topping)
    let userCart = await Cart.findBy('customer_id', auth.user.id)
    if(userCart){
      await userCart.products().attach(newProduct.id)
    }else(
      response.send("please login")
    )

}
}

module.exports = ReactController
