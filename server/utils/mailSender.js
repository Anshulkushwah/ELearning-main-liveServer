const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {

    console.log("MAIL SENDER : ->>>>>>>> ",process.env.MAIL_HOST, "  ,, ", process.env.MAIL_USER," /// ",process.env.MAIL_PASS," MAI CHUTIYA HU ");
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      
    })
    console.log("MAIL SENDER : ->>>>>>>> ",process.env.MAIL_USER,"  MAI CHUTIYA HU ");
    let info = await transporter.sendMail({
      from: `"E-Learning | Education Platform" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log("MAIL SENDER : ->>>>>>>> ",info.response);
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
