'use strict'

const Customer = use('App/Models/Customer')
const Cart = use('App/Models/Cart')

class CustomerController {

async index({view, auth}){
    let customers = await Customer.all()
    //await auth.getUser();
    return view.render('customers/show',{
      customers: customers.toJSON()
    })
  }
  create({view}){
    return view.render('customers/create')
  }
 async processCreate({request,response}){
    let body = request.post()
    let newCustomer = new Customer()
    let newCart = new Cart()
    newCustomer.username = body.username
    newCustomer.email = body.email
    newCustomer.address = body.address
    newCustomer.password = body.password
    await newCustomer.save()
    newCart.customer_id = newCustomer.id
    await newCart.save()
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
    async processLogin({request, auth, response}) {
    let Data = request.post();
    await auth.authenticator('customer').attempt(Data.username, Data.password);
    // return auth.customer

    console.log("logged in")
    console.log(auth.authenticator('customer').getUser());
        response.redirect('/customers/show')
  }

 async logout({auth,response}){
    await auth.logout()
    response.redirect('/')
  }


}

module.exports = CustomerController
