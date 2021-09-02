export function getRootAPI(req, res) {
  res.status(200).json({ name: 'obet' });
}

export function registerUser(req, res) {
  res.status(201).json({ msg: 'user created' });
}
