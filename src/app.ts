import express from 'express';
import cors from 'cors';
import mountRoutes from './routes';
require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());

// routes
mountRoutes(app);

app.get('/', (_req, res) => res.status(200).json({ success: true }));

export default app;
