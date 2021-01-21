'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
async index({view}){
    let customers = await customer.all()
    return view.render('customers/show',{
      customers: customers.toJSON()
    })
  }
  create({view}){
    return view.render('customers/create')
  }
  processCreate({request,response}){
    let body = request.post()
    let newCustomer = new Customer()
    newCustomer.username = body.username
    newCustomer.email = body.email
    newCustomer.address = body.address
    newCustomer.password = body.password
    newCustomer.save()
  }

}


module.exports = CustomerController
