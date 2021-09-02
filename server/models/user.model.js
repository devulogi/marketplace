import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const options = {
  timestamps: true,
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required.'],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Email is required.'],
    },
    password: {
      type: String,
      min: 6,
      required: [true, 'Password is required.'],
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripe_session: {},
  },
  options
);

userSchema.pre('save', function (next) {
  const _self = this;

  if (!_self.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(_self.password, salt, function (err, hashedPassword) {
      if (err) return next(err);
      _self.password = hashedPassword;
      return next();
    });
  });
});

export default mongoose.model('user', userSchema);
