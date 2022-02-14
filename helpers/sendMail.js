import nodemailer from "nodemailer"
import absoluteUrl from "next-absolute-url"

export const sendEmail = (options) => {
  let smtpConfig = {
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'apikey',
        pass: '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'
    }
  }
  var transporter = nodemailer.createTransport(smtpConfig);
  const mailOptions = {
    from: "morezqdev@gmail.com",
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
