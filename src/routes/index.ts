import { Router } from 'express';
import playerController from '../controllers';

const router = Router();
router.get('/player', playerController.getAll);

export default router;
