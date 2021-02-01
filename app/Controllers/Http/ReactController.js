'use strict'

const Flavour = use("App/Models/Flavour")
const Topping = use("App/Models/Topping")
const Sugar = use("App/Models/SugarLevel")


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
}

module.exports = ReactController
