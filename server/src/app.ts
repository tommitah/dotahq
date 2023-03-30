import express from 'express';
import cors from 'cors';
import router from './routes';
import morgan from 'morgan';
require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// routes
app.use(router);

app.get('/', (_req, res) => res.status(200).json({ success: true }));

export default app;
