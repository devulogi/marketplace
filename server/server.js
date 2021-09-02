import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';

config();

import './services/mongoose.js';

import router from './routes/auth.route.js';

const PORT = process.env.PORT || process.env.DEV_APP_PORT;

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
