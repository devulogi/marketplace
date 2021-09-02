import express from 'express';

import { getRootAPI } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', getRootAPI);

export default router;
