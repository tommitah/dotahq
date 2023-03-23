import { Request, Response, NextFunction } from 'express';
import { PlayerModel as Player } from '../models';

const getAll = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const players = await Player.findAll({ where: {} });
        res.json(players);
    } catch (error) {
        next(error);
    }
};

const getByAccountId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { accountId } = req.params;
        const player = await Player.findOne({
            where: { account_id: accountId },
        });

        res.json(player);
    } catch (error) {
        next(error);
    }
};

const create = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    // const id = uuidv4();
    try {
        const newPlayer = await Player.create({ ...req.body /*id*/ });
        res.json({ newPlayer, msg: 'Player creation successful.' });
    } catch (error) {
        next(error);
    }
};

// NOTE: still not certain how this will actually be used,
// this is a preliminary version, changes expected
const update = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const accountId = req.params;
        const player = await Player.findOne({
            where: { account_id: accountId },
        });

        if (!player)
            res.json({ msg: `Can't find player for id: ${accountId}` });

        // TODO: figure out a way to use this so player is not possibly null
        const newPlayer = await player?.update({ ...req.body });
        res.json(newPlayer);
    } catch (error) {
        next(error);
    }
};

// NOTE: mostly for use manually
const deletePlayer = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const accountId = req.params;
        const player = await Player.findOne({
            where: { account_id: accountId },
        });

        if (!player)
            res.json({ msg: `Can't find player for id: ${accountId}` });

        // NOTE: player? is used since typescript notes that this might be null
        // something to fix if we end up using this in automation, though I doubt it.
        const deletedPlayer = await player?.destroy();
        res.json(deletedPlayer);
    } catch (error) {
        next(error);
    }
};

export default {
    create,
    update,
    deletePlayer,
    getAll,
    getByAccountId
}
