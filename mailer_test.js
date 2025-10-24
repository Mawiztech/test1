// Test utility for sending emails from a Render.com server

const nodemailer = require('nodemailer');

// Mailer settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fortspit21@gmail.com',
    pass: 'zyyb nsvp yfzv rrcm',
  },
});

// Connection test
transporter.verify((error) => {
  if (error) {
    console.error('Mail server init error!');
    console.error(error);
  } else console.log('Mail server connection established sucessfully!');
});

// Send the mail to user
transporter.sendMail({
  from: 'Mawiz Tech<support@bizpro.ng>',
  to: 'BizPro User<wisdomagoha@gmail.com>',
  subject: 'Verify Your Email Address | BizPro Test | ' + new Date().toTimeString().split(' ')[0],
  html: '<h1>This is just a test. Nothing to see here!</h1>' + new Date().toISOString(),
}).catch(error => {
  console.error(error);
}).then(() => {
  console.log('Email sent to user');
});
