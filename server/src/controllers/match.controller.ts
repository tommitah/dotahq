import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { MatchModel as Match } from '../models';

const getAll = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const matches = await Match.findAll({ where: {} });
        res.json(matches);
    } catch (error) {
        next(error);
    }
};

const getManyByAccountId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { accountId } = req.params;
        const matches = await Match.findAll({
            where: {
                players: {
                    [Op.contains]: [accountId],
                },
            },
        });

        res.json(matches);
    } catch (error) {
        next(error);
    }
};

export default {
    getAll,
    getManyByAccountId,
};
