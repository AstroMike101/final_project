
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

exports.sendPromotionalEmail = functions.https.onRequest(async (req, res) => {

    // set up SendGrid API key and email message with your promotional content
    sgMail.setApiKey('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');
    const msg = {
        to: 'recipient_email_address@example.com',
        from: 'your_email_address@example.com',
        subject: 'Promotional offer for our customers',
        html: '<p>Dear customer,</p><p>We are pleased to offer you a special promotion for our products. Visit our website and use the promo code SPRINGSALE at checkout to get 20% off your purchase.</p><p>Thank you for choosing our products.</p>'
    };

    try {
        // send the email message using the SendGrid API
        await sgMail.send(msg);
        console.log('Promotional email sent');
        res.status(200).send('Promotional email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending promotional email');
    }

});
