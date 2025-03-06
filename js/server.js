/*const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (if needed)
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { fullName, email, phone, subject, message } = req.body;

  // Set up nodemailer transporter (configure with your email)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Your email
      pass: 'your-email-password', // Your email password or app password
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // Your email where messages are sent
    subject: `New Contact Message: ${subject}`,
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Something went wrong.');
    }
    res.send('Message sent successfully!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

*/






/*const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});*/


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the form (optional)
app.get('/', (req, res) => {
  res.send('Form is live! Visit your HTML page.');
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { fullName, email, phone, subject, message } = req.body;
  console.log('Form Data Received:', { fullName, email, phone, subject, message });

  // Send a response back to the client
  res.send('Thank you for your message! We will get back to you soon.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

