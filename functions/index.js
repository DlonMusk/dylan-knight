const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

exports.sendEmail = functions.https.onCall((data, context) => {
  const {name, email, subject, message} = data;

  // Create a Nodemailer transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Send the email
  return transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: `${name} - ${subject}`,
    text: message,
  });
});


exports.hiThere = functions.https.onCall((data, context) => {
  console.log("HELLO THERE", data);
});


