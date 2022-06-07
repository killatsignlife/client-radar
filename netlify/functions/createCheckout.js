const stripe = require('stripes')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const donation = JSON.parse(event.body);
  const lineItems = [
    {
      currency: 'BRL',
      amount: `${donation.price}00`,
      quantity: 1,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: process.env.URL,
    cancel_url: process.env.URL,
    line_items: lineItems,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
};
