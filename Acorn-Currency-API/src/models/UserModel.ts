import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  // userId: ObjectId,
  userFirstName: { type: String, required: true },
  userLastName: String,
  userEmail: { type: String, required: true },
  birthday: Date
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
