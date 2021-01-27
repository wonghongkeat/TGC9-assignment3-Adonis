'use strict'

const Sugar = use("App/Models/SugarLevel")
const Flavour = use("App//Models/Flavour")
const Product = use("App/Models/Product")
const Topping = use("App/Models/Topping")

class ProductController {
  async create({view}){
    let sugar = await Sugar.all()
    let flavour = await Flavour.all()
    let topping = await Topping.all()
    return view.render('product/create',{
      flavours: flavour.toJSON(),
      sugars: sugar.toJSON(),
      toppings: topping.toJSON()
    })
  }

 async processCreate({request,response}){
    let body = request.post()
    let newProduct = new Product()
    newProduct.sugar_id = body.sugar
    newProduct.flavour_id = body.flavour
    await newProduct.save()
    await newProduct.toppings().attach(body.topping)

   response.json(newProduct)

  }
  async show({view,params}){
    let product = await Product.find(params.id)
    let sugars = await product.sugar().fetch()
    let flavours = await product.flavour().fetch()
    let toppings = await product.toppings().fetch()
    return view.render('product/show',{
      product:product.toJSON(),
      sugars: sugars.toJSON(),
      flavours:flavours.toJSON(),
      toppings:toppings.toJSON()
    })
  }

 async showProduct({view,response}){
   let product = await Product.all()
  let  x = await Product.query().with("toppings").fetch()
  // return view.render("product/showAll",{
  //   products:x.toJSON()
  // })
  response.json(x)
  }

}

module.exports = ProductController
