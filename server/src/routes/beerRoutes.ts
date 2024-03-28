import express, { Router } from 'express';
import { getBeers } from '../controllers/beer';

const router: Router = express.Router();

router.get('/:beer', getBeers);

export default router;