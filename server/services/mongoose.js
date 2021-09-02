import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

mongoose.connect(process.env.DEV_MONGODB_URI);

mongoose.connection
  .on('open', function () {
    console.log(`Database is running on ${process.env.DEV_MONGODB_URI}`);
    return this;
  })
  .on('error', function () {
    console.log('Failed to connect to DB.');
  });
