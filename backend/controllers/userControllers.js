import asynHandler from "express-async-handler";

import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

/**
 * @description     Auth user
 * @router          POST /api/users/login
 * @access          public
 */

const authUser = asynHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Envalid email or password");
  }
});

/**
 * @description     Register new user
 * @route           Post  /api/users
 * @access          public
 */

const registerUser = asynHandler(async (req, res) => {
  const { name, email, password, number } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400); // bad request
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, number, password });

  if (user) {
    // successfull created
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      number: user.number,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400); //Bad request
    throw new Error("Invalid user data");
  }
});

/**
 * @description     GET all users
 * @route           GET /api/users
 * @access          private/admin
 */

const getUsers = asynHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json(users);
});

/**
 * @description Delete user
 * @route       DELETE  /api/users/:id
 * @access      private/admin
 */

const deleteUser = asynHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User delete" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/**
 * @description     Get user by Id
 * @route           GET /api/users/:id
 * @access          private/admin
 */

const getUserById = asynHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { authUser, getUserById, getUsers, registerUser, deleteUser };
