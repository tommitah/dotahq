import { Request, Response, NextFunction } from 'express';

const getAll = async (
    _req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    // TODO: after model is implemented
    res.status(200).json({ players: true });
};

export default {
    getAll,
};
