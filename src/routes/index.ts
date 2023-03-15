import { Express } from 'express-serve-static-core';
import playerRouter from './player';

export default function mountRoutes(app: Express) {
    app.use('/player', playerRouter);
    // etc
}
