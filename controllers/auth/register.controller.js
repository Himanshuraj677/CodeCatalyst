import { User } from "../../models/association.js";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import validator from "validator";
import bcrypt from "bcryptjs";

const Register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).send({
        message: "Invalid email",
      });
    }
    if (!validator.isStrongPassword(password)) {
      return res.status(400).send({
        message: "Password is not strong enough",
      });
    }
    if (!validator.isAlphanumeric(username)) {
      return res.status(400).send({
        message: "Username must be alphanumeric",
      });
    }

    const userExists = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
      attributes: ["id"],
    });
    if (userExists) {
      return res.status(400).send({
        message: "User already exists",
        redirect: "/login",
      });
    }
    const user = await User.create({ username, email, password });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the User.",
    });
  }
};

export default Register;
