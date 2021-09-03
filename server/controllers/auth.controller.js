import User from '../models/user.model.js';

export function getRootAPI(req, res) {
  res.status(200).json({ name: 'obet' });
}

export function registerUser(req, res, next) {
  if (!req.body.name) {
    return res.status(400).send({ error_msg: 'name is required.' });
  }

  if (!req.body.password || req.body.password.length < 6) {
    return res.status(400).send({
      error_msg: 'password is required and should be 6 characters long.',
    });
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return next(err);

    if (!user) {
      User.create(req.body, function (err, newUser) {
        if (err) return next(err);

        return res.status(201).send({ ok: true });
      });
    } else {
      return res
        .status(400)
        .send({ error_msg: `${req.body.email} was already taken.` });
    }
  });
}
