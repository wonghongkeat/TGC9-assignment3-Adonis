'use strict'


const Config = use('Config')
const Stripe = use('stripe')(Config.get('stripe.secret_key'))
const CART_KEY = "cart"

class CheckoutController {
    async checkout({ response, session, view }) {
        let lineItems = [];
        let cart = Object.values(session.get(CART_KEY, {}));
        // 1. Create line items
        for (let cartItem of cart) {
          lineItems.push({
            name: cartItem.title,
            images: [cartItem.image_url],
            amount: cartItem.price,
            quantity: cartItem.qty,
            currency:'SGD'
          })
        }
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
