'use strict'


const Config = use('Config')
const Stripe = use('stripe')(Config.get('stripe.secret_key'))
const CART_KEY = "cart"


const getCartFromUser = async (session, auth) => {
  let cart = session.get(CART_KEY, {});
  let user = null;
  try {
    user = await auth.getUser();
  } catch {
    user = null;
  }

  // if cart is null, get from user instead
  try {
    if (Object.keys(cart).length == 0 && user && user.cart_content) {
      cart = JSON.parse(user.cart_content);
    }
  }
  catch {
    cart = {};
  }
  return cart;
}

const forgetCart = async() => {
  session.forget(CART_KEY);
  let user = null;
  try {
    user = await auth.getUser();
    user.cart_content = "";
    user.save();
  } catch {
    user = null;
  }
}


class CheckOutController {
  async checkout({ response, session, view, auth }) {
    // 1. create line items (i.e what the user is paying for)
    let cart = await getCartFromUser(session, auth);
    // ...convert the cart from object to an array
    let cartArray = Object.values(cart);

    let lineItems = cartArray.map(cartItem => {
      // NOTE: the keys in this object are required by stripe. So we have to follow
      return {
        'name': cartItem.category,
        'description': cartItem.description,
        'amount': cartItem.price,
        'quantity': cartItem.quantity,
        'currency': 'SGD'
      }
    })
        let metaData = JSON.stringify(Object.values(cart));
    
       // 2. Create payment
        const payment = {
          payment_method_types: ['card'],
          line_items: lineItems,
          success_url: Config.get('stripe.success_url') + '?sessionId={CHECKOUT_SESSION_ID}',
          cancel_url: Config.get('stripe.error_url'),
          metadata: {
            'orders': metaData
          }
        }
        // 3. Register payment
        let stripeSession = await Stripe.checkout.sessions.create(payment)
        return view.render('checkout/checkout',{
            'sessionId' : stripeSession.id, // 4. Get the ID of the session
            'publishableKey': Config.get('stripe.publishable_key')
        })
      }
    

    processPayment({request, response}) {
        let payload = request.raw();
        let endpointSecret = Config.get('stripe.endpoint_secret')
        let sigHeader = request.header("stripe-signature")
        let event = null;
        try {
          event = Stripe.webhooks.constructEvent(payload, sigHeader, endpointSecret);
    
        } catch (e) {
          response.send({
            'error':e.message
          })
        }
        if (event.type=='checkout.session.completed') {
          let stripeSession = event.data.object;
          // process stripeSession
        }
        response.json({received: true});
      }
    
    
}

module.exports = CheckoutController
