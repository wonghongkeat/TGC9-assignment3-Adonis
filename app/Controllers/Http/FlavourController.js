'use strict'
const Flavour = use('App/Models/Flavour')
class FlavourController {
  async index({view}){
    let flavours = await Flavour.all()
    return view.render('flavour/show',{
      flavours:flavours.toJSON()
    })

  }
}

module.exports = FlavourController
