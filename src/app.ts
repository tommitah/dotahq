import express from 'express';
import cors from 'cors';
require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ success: true }));

export default app;
