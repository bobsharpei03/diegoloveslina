const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({
  origin: "*"
})
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})
exports.submit = functions.https.onRequest((req, res) => {
  
  // res.set('Access-Control-Allow-Origin', '*')
  // res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  // res.set('Access-Control-Allow-Headers', '*')

  // if (req.method === 'OPTIONS') {
  //   res.end()
  // } else {
    cors(req, res, () => {
      // if (req.method !== 'POST') {
      //   return
      // }
      const toEmail = 'linafloresch@gmail.com';
      const htmlContent = `<ul<li>Congratulations! You have received an RSVP, details below </li>><li>Name: ${req.body.Name}</li><li>Email: ${req.body.Email}</li><li>Are you attending?: ${req.body.Attend}</li><li>Guest Dance Song1: ${req.body.Song1}</li><li>Guest Dance Song2: ${req.body.Song2}</li></ul>`;

      const mailOptions = {
        from: req.body.Email,
        replyTo: req.body.Email,
        to: toEmail,
        subject: `${req.body.Name} has send a RSVP `,
        html: htmlContent
      }
      // res.status(200).send(mailOptions);

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', gmailEmail)
        res.status(200).send({
          isEmailSend: true
        })
        return
      })
    })
  // }
})