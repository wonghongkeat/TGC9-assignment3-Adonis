'use strict'

class ReactCartController {

  async getCart({request, response, auth}){
    let customer = await auth.authenticator('api').getUser();
    let cartContent = JSON.parse(customer.cart_content)
    response.json(cartContent)
  }

  async updateCart({request, response, auth}){
    let customer = await auth.authenticator('api').getUser()
    customer.cart_content = JSON.stringify(request.post().cart_content);
    await customer.save();
    response.json(customer.cart_content);
  }
}

module.exports = ReactCartController
