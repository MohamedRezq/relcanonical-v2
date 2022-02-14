import connectDB from "../../../connectDB";
import User from "../../../model/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import absoluteUrl from "next-absolute-url";
import { sendEmail } from "../../../helpers/sendMail";

connectDB();

export default async (req, res) => {
  console.log(req.body);

  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "email not found" });
    }

    console.log(user);

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // console.log(token)

    user.resetToken = token;
    await user.save();

    const { origin } = absoluteUrl(req);
    const link = `${origin}/account/reset/verify/${token}`;

    const message = `<div>Reset Your Password - Relcanonical</div></br></br><div>

    Hey, there!</div></br></br><div>
    
    Click <a href="${link}">Here</a> to reset your password.</div></br></br><div>
    
    -- Relcanonical</div></br></br><div>`;

    // console.log("message", message)

    // console.log("here")

    await sendEmail({
      to: user.email,
      subject: "Reset Your Password - Relcanonical",
      text: message,
    });

    return res
      .status(200)
      .json({
        message: `Email sent to ${user.email}, please check your email`,
      });
  } catch (error) {
    console.log(error);
  }
};
