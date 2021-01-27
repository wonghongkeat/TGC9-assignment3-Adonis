'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
async index({view}){
    let customers = await Customer.all()
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

  async update({view,params}){
    let username = await Customer.find(params.user_id)
    return view.render('customers/update',{
      username: username.toJSON()
    })
  }

  async processUpdate({request,respond,params}){
    let updateUser = await Customer.find(params.user_id)
    let body = request.post()
    updateUser.username = body.username
    updateUser.email = body.email
    updateUser.address = body.address
    updateUser.password = body.password
    updateUser.save()
  }

   login({view}){
    return view.render('customers/login')
  }
    async processLogin({request, auth}) {
    let Data = request.post();
    await auth.attempt(Data.username, Data.password);
    return "success"
    console.log("logged in")
  }

}

module.exports = CustomerController
