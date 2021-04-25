'use strict'
const Token = use("App/Models/Token");
const Customer = use("App/Models/Customer");
const Encryption = use('Encryption');



class LoginWithTokenController {
    async login({request, response, auth}){
        let rawToken = request.get()['token'];
        let plainToken = Encryption.decrypt(rawToken);

        let token = Token.findBy('token',plainToken);
        if (token){
            let customer = await Customer.find(token.customer_id);
            await auth.login(customer);
            response.send("User has been logged in succesfully")
        }else {
            response.send("Invalid token");
        }
    }
}

module.exports = LoginWithTokenController
