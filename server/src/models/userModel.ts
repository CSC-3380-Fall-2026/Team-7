
import mongoose, { Schema, Document } from "mongoose";

// Defines the information stored for each user
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  favorites: number[];
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
    favorites: {
      type: [Number],
      default: [],
    },
  },
  { timestamps: true }
);

// Creates the User model
const User = mongoose.model<IUser>("User", userSchema);

export default User;