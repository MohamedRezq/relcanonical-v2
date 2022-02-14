import connectDB from "../../../connectDB"
import User from "../../../model/userModel"
import bcrypt from "bcryptjs"

connectDB()

export default async (req, res) => {
  console.log("req: ", req)
  try {
    if (req.method === "POST") {
      const { email, firstName } = req.body

      // console.log(email, password, firstName, lastName)

      const user = await User.findOne({ email: email })

      if (user) {
        return res.status(422).json({ error: "User already exists" })
      }

      //const HashedPassword = await bcrypt.hash(password, 12)
      const newUser = await new User({
        email: email,
        //password: HashedPassword,
        name: `${firstName}`, //${lastName}
        avatar: `${firstName.charAt(0)}`,
        type: "inactive",
        password: "",
        resetToken: "",
      }).save()
      res.status(200).json({ message: "Sign Up Sucess" })
    }
  } catch (error) {
    console.log(error)
  }
}
