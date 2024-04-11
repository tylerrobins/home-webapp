import { Router } from 'express';
import version1Api from './v1/v1.route';

const router = Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: '🍕 Api route 🍕',
	});
});

// routes registration
router.use('/v1', version1Api);

export default router;
