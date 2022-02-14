import connectDB from "../../../connectDB";
import User from "../../../model/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import absoluteUrl from "next-absolute-url";
import { sendEmail } from "../../../helpers/sendMail";

connectDB();

export default async (req, res) => {
  console.log(req.body);

  const { name, password, conPassword } = req.body;

  const user = await User.findOne({ name, password: "pass" });

  if (!user) {
    res.status(404).json({ message: "user not found" });
  }

  console.log(user);

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // console.log(token)

  user.resetToken = token;
  await user.save();

  if (password !== conPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password needs to be at least 6 characters" });
  }

  if (user) {
    user.password = await bcrypt.hash(password, 12);

    user.resetToken = undefined;
    await user.save();

    return res.status(200).json({ message: "success in updating user's password" });
  }
};
