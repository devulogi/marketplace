export function errorHandler(err, req, res, next) {
  res.status(500).json({ ...err });
}

export function notFoundHandler(req, res) {
  res.status(404).json({ error: 'resource not found!' });
}
