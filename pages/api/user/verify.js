import connectDB from "../../../connectDB"
import User from "../../../model/userModel"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import absoluteUrl from "next-absolute-url"
import { sendEmail } from "../../../helpers/sendMail"

connectDB()

export default async (req, res) => {
  //console.log(req.body)

  try {
    const { email, firstName } = req.body
    const { origin } = absoluteUrl(req)
    const link = `${origin}/account/onboard/${firstName}`

    const message = `<div>Click on the link below to activate your account on relcanonical, if the link is not working then please paste into the browser.
    </div></br><div>link:${link}</div>>`
    await sendEmail({
      to: email,
      subject: "Verify your account",
      text: message,
    })

    return res
      .status(200)
      .json({ message: `Email sent to ${email}, please check your email` })
  } catch (error) {
    console.log(error)
  }
}
