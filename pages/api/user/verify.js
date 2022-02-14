import connectDB from "../../../connectDB"
import User from "../../../model/userModel"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import absoluteUrl from "next-absolute-url"
import { sendEmail } from "../../../helpers/sendMail"

connectDB()

export default async (req, res) => {
  console.log(req.body)

  try {
    const { email } = req.body
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    })

    // console.log(token)

    user.resetToken = token
    await user.save()

    const { origin } = absoluteUrl(req)
    const link = `${origin}/account/onboard/${token}`

    const message = `<div>Click on the link below to activate your account on relcanonical, if the link is not working then please paste into the browser.</div></br>
    <div>link:${link}</div>`

    // console.log("message", message)

    // console.log("here")

    await sendEmail({
      to: user.email,
      subject: "Verify your account",
      text: message,
    })

    return res
      .status(200)
      .json({ message: `Email sent to ${user.email}, please check your email` })
  } catch (error) {
    console.log(error)
  }
}
