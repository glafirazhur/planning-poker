import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

userSchema.statics.findByLogin = (login) => this.findOne({ userName: login });

const User = mongoose.model('User', userSchema);

export default User;
