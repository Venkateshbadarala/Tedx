require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

const corsOptions = {
  origin: '*', // Ensure this matches your Vercel app URL without the trailing slash
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any other email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get('/', (req, res) => {
  res.send('Backend is deployed and running correctly!');
});



app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, 
    subject: name,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
