import { Router } from 'express';
import playerController from '../controllers';

const router = Router();
router.get('/player', playerController.getAll);
router.get('/player/:id', playerController.getByAccountId)
router.post('/player', playerController.create)
router.put('/player/:id', playerController.update)
router.delete('/player/:id', playerController.deletePlayer)

export default router;
