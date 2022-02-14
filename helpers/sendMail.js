import nodemailer from "nodemailer"
import absoluteUrl from "next-absolute-url"

export const sendEmail = (options) => {
  let smtpConfig = {
    host: 'smtp.mailersend.net',
    port: 587,
    secure: true, // use SSL
    auth: {
        user: 'MS_9glDOR@relcanonical.com',
        pass: 'U3qUl4FDnb2FMRvZ'
    }
  }
  var transporter = nodemailer.createTransport(smtpConfig);
  const mailOptions = {
    from: "MS_9glDOR@relcanonical.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  }

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}
