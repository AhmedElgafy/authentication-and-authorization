import { Request, Response } from "express";
import User from "../models/users";
//Post v1/auth/register.
export async function Register(req: Request, res: Response) {
  const { first_name, last_name, email, password } = req.body;
  try {
    const newUser = new User({ first_name, last_name, email, password });
    const userExist = await User.find({ email: email });
    if (userExist) {
      return res.status(400).json({
        status: "failed",
        data: [],
        message: "It seems you already have an account",
      });
    }
    const saveUser = await newUser.save();
  } catch (err) {}
}
