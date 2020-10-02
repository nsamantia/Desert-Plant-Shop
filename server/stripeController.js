require('dotenv').config()
const{SECRET_KEY } = process.env


const { default: Stripe } = require("stripe")
const stripe = require('stripe')('sk_test_51HXYqjDeUNmgXOYnlpSmWIBmsX3lA50owIo2eUwJSPAnYoq7dFjQ4ELFtsBOO7E3Pq0AA9H3MyBY6OmD7gmIyVWo00p8yEQACS');




module.exports = {
    checkout: async (req, res) => {
        const { totalPrice, token } = req.body

        const source = await stripe.sources.create({
            customer: 'cus_AFGbOSiITuJVDs',
            usage: 'reusable',
            original_source: 'src_19YP2AAHEMiOZZp1Di4rt1K6',
          }, {
            stripeAccount: '{{CONNECTED_STRIPE_ACCOUNT_ID}}',
          });


       
        const charge = await stripe.charges.create(
            {amount: totalPrice * 100,
             currency: 'usd',
             receipt_email: token.email,
             description: 'Checkout Charge',
             source: tok_id,
             shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
             }
            }
        )
       if({charge}){
      return res.status('success').send({status})}
      else {
          res.status('Failed').send(status)
      }
    }

}