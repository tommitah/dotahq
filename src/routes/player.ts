import { Router, Request, Response, NextFunction } from 'express';

const playerRouter = Router();

// Get all players
playerRouter.get(
    '/',
    async (_req: Request, res: Response, _next: NextFunction) => {
        return res.status(200).json({ players: true });
    }
);

export default playerRouter;
