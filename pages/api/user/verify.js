import connectDB from "../../../connectDB";
import User from "../../../model/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import absoluteUrl from "next-absolute-url";
import { sendEmail } from "../../../helpers/sendMail";

connectDB();

export default async (req, res) => {
  //console.log(req.body)

  try {
    const { email, firstName } = req.body;
    const { origin } = absoluteUrl(req);
    const link = `${origin}/account/onboard/${firstName}`;

    const message = `<div>Confirm Your Email - Relcanonical</div></br></br><div>

    Hey, there!</div></br><div>
    
    Please click <a href="${link}">Here</a> to confirm your email.</div></br><div>
    
    -- Relcanonical</div></br><div>
    `;
    await sendEmail({
      to: email,
      subject: "Verify your account",
      text: message,
    });

    return res
      .status(200)
      .json({ message: `Email sent to ${email}, please check your email` });
  } catch (error) {
    console.log(error);
  }
};
