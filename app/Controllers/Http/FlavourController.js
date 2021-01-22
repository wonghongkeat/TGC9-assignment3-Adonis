'use strict'
const Flavour = use('App/Models/Flavour')
class FlavourController {
  async index({view}){
    let flavours = await Flavour.all()
    return view.render('flavour/show',{
      flavours:flavours.toJSON()
    })
  }

  create({view}){
    return view.render('flavour/create')
  }

  processCreate({request,respond}){
    let body = request.post()
    let newFlavour = new Flavour()
    newFlavour.tea = body.tea
    newFlavour.price = body.price
    newFlavour.save()
  }
}

module.exports = FlavourController
