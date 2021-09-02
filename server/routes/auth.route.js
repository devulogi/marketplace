import express from 'express';

import { getRootAPI } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', getRootAPI);
router.post('/', (req, res) => {
  console.log(req.body);
  res.json({ msg: 'received' });
});

export default router;
