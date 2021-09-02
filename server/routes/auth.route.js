import express from 'express';

import { getRootAPI, registerUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', getRootAPI);
router.post('/register', registerUser);

export default router;
