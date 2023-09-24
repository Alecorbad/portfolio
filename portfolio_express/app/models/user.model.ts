import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
      name: String,
  },
  { 
      timestamps: true,
  }
);


type UserModel = Model<IUser>;

const User: UserModel = mongoose.model<IUser>('User', userSchema);

export default User;
