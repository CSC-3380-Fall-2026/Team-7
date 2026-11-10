
import mongoose, { Schema, Document } from "mongoose";

// Defines the information stored for each user
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Defines the structure of a user in MongoDB
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creates the User model
const User = mongoose.model<IUser>("User", userSchema);

export default User;