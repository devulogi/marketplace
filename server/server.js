import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';

config();

import './services/mongoose.js';

import router from './routes/auth.route.js';

const PORT = process.env.PORT || process.env.DEV_APP_PORT;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(function (req, res, next) {
  res.removeHeader('X-Powered-By');
  next();
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
