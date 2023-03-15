import express from 'express';
import cors from 'cors';
import routes from './routes';
require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/player', routes.player)
//app.use('/match')

app.get('/', (_req, res) => res.status(200).json({ success: true }));

export default app;
