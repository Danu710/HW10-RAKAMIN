import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/Database.js";
import { User } from "../models/UserModel.js";
import { verifyToken } from "../middleware/verifyToken.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Cari user berdasarkan email
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).send("Invalid email or password");
  // Check if password is correct
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");
  // Generate token
  const token = jwt.sign({ id: user.id }, "mysecretkey");
  res.header("auth-token", token).send(token);
};
