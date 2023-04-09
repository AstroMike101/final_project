
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendMail = functions.https.onCall((data, context) => {
    console.log('data : ', data);
    console.log('data.targetAdress : ', data.targetAdress);
    const sgMail = require('@sendgrid/mail');
    // Get configured environmental data
    sgMail.setApiKey(functions.config().sendgrid.apikey);

    // send mail
    const msg = {
        to: data.targetAdress,
        from: '[cinebooking101@gmail.com]',
        subject: 'promotion test',
        text: 'promotion test',
    };
    // await sgMail.send(msg);
    sgMail.send(msg);

    return { data: data, auth: context.auth };
});