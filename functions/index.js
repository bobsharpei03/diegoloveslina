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

      const mailOptions = {
        from: req.body.Email,
        replyTo: req.body.Email,
        to: gmailEmail,
        subject: `${req.body.Name} just messaged me from my website`,
        text: req.body.Meal,
        html: `<p>${req.body.Meal}</p>`,
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