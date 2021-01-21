'use strict'

const Sugar = use("App/Models/SugarLevel")
const Flavour = use("App//Models/Flavour")
const Product = use("App/Models/Product")

class ProductController {
  async create({view}){
    let sugar = await Sugar.all()
    let flavour = await Flavour.all()
    return view.render('product/create',{
      flavours: flavour.toJSON(),
      sugars: sugar.toJSON()
    })
  }

  async processCreate({request,response}){
    let body = request.post()
    let newProduct = new Product()
    newProduct.sugar_id = body.sugar
    newProduct.flavour_id = body.flavour
    newProduct.save()

  }
}

module.exports = ProductController
