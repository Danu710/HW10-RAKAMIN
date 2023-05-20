import { User } from "../models/UserModel.js";
import db from "../config/Database.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
  try {
    await db.authenticate();
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { id, email, gender, password, role } = req.body;

    // Check if the email is already registered
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).send({ error: "Email already registered" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = await User.create({
      id,
      email,
      gender,
      password: hashedPassword,
      role,
    });

    // Return the created user
    return res.status(201).send(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Server error" });
  }
};

// export const editUser = async (req, res) => {
//   try {
//     await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json({ msg: "User Updated" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const editUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) return res.status(404).json({ message: "Users not found" });

  User.update(req.body, { where: { id: req.params.id } });

  return res.status(200).json({ message: "User updated" });
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (user) {
      await user.destroy();
      return res
        .status(200)
        .json({ message: `User dengan id ${id} berhasil dihapus` });
    } else {
      return res.status(404).json({ message: `User tidak ditemukan` });
    }
  } catch (error) {
    console.log(error.message);
  }
};
