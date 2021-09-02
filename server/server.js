import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';

import './services/mongoose.js';

config();

import router from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || process.env.DEV_APP_PORT;

app.use(morgan('dev'));
app.use(cors());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
