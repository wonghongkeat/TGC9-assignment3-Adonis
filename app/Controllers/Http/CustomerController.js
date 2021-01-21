'use strict'

const customer = use('App/Models/Customer')

class CustomerController {
async index({view}){
    let customers = await customer.all()
    return view.render('customers/show',{
      customers: customers.toJSON()
    })
  }
}

module.exports = CustomerController
