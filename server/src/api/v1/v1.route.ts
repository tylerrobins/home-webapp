import { Router, Request, Response } from 'express';

import userRoute from './user.route';
import homeRoute from './home.route';

const router = Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: '🍕 Api route VERSION 1 🍕',
	});
});

router.use('/user', userRoute);
router.use('/home', homeRoute);

export default router;