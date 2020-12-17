/* eslint-disable no-console */

import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';

import app from '@/main/config/app';
import { env } from './config/env';

// import { createConnection } from 'typeorm';

const startServer = async () => {
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  // createConnection method will automatically read connection options
  // from your ormconfig file or environment variables
  // await createConnection();

  app.listen(env, () => {
    console.log(`🚀 Running at localhost:${env}`);
  });
};

startServer().catch((err: Error) => {
  console.log(err);
});
