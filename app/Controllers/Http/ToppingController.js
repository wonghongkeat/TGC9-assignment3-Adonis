'use strict'

const Topping = use("App/Models/Topping")

class ToppingController {
 async index({view}){
   let topping = await Topping.all()
   return view.render('topping/show',{
     topping:topping.toJSON()
   })

 }
}

module.exports = ToppingController
