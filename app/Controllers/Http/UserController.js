'use strict'

const User = use("App/Models/User")

class UserController {
  create({view}){
    return view.render('user/create')
  }

  async processCreate({request,response}){
    let body = request.post()
    let newUser = new User()
    newUser.username = body.username
    newUser.email = body.email
    newUser.password = body.password
    await newUser.save()
  }
  login({view}){
    return view.render('user/login')
  }

  async processLogin({request, response, auth, session}) {
    let Data = request.post();
     try {
      await auth.attempt(Data.username, Data.password);
    } catch (e) {
      session.flashExcept(['password']);

      session.flash({
        error: 'We cannot find any account with these credentials.',
      });

      return response.redirect('/user/login');
    }

    session.flash({ notification: 'Logged in successfully' });
    return response.redirect('/');
  }
   async logout({auth,response}){
    await auth.logout()
    response.redirect('/')
  }
  }





module.exports = UserController
