import express from 'express';
import { setupRoutes } from '@/main/config/routes';
import { setupApolloServer } from './apollo-server';

const app = express();
app.use(express.json());
setupRoutes(app);
setupApolloServer(app);

export default app;
