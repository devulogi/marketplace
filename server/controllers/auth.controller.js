import User from '../models/user.model.js';

export function getRootAPI(req, res) {
  res.status(200).json({ name: 'obet' });
}

export function registerUser(req, res) {
  User.create({ ...req.body })
    .then(user => {
      res.status(201).json({ msg: 'success: user created' });
    })
    .catch(error => {
      return res.status(500);
    });
}
