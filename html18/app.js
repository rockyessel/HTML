const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`nodemailer is listening at http://localhost:${port}`);
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

let mailOptions = {
  from: "tomerpacific@gmail.com",
  to: "tomerpacific@gmail.com",
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`The message was sent successfully`);
  }
});
