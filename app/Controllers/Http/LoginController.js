'use strict'

const Customers = use("App/Models/Customer")
const Cart = use("App/Models/Cart")

class LoginController {
   async login({ request, response, auth }) {
    let data = request.post();
    let uid = data.username;
    let password = data.password;
    let token = await auth.authenticator('api').attempt(uid, password)
    return response.json(token);
  }


  async register({ request, auth, response }) {
    let body = request.post()
    let newCustomer = new Customers()
    let newCart = new Cart()
    newCustomer.username = body.username
    newCustomer.email = body.email
    newCustomer.address = body.address
    newCustomer.password = body.password
    await newCustomer.save()
    newCart.customer_id = newCustomer.id
    await newCart.save()
  }
}

module.exports = LoginController
