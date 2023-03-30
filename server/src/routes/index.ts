import { Router } from 'express';
import { PlayerController } from '../controllers';

const router: Router = Router();

router.get('/player', PlayerController.getAll);
router.get('/player/:id', PlayerController.getByAccountId);
router.post('/player', PlayerController.create);
router.put('/player/:id', PlayerController.update);
router.delete('/player/:id', PlayerController.deletePlayer);

export default router;
