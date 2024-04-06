import { Model, Schema } from "mongoose";
const UserSchema = new Schema({
  first_name: {
    type: String,
    require: [true, "your fist name is required"],
    max: 25,
  },
  last_name: {
    type: String,
    require: [true, "your last name is required"],
    max: 25,
  },
  email: {
    type: String,
    required: [true, "Your email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    select: false,
    max: 25,
  },
  role: {
    type: String,
    required: true,
    default: "0x01",
  },
});
