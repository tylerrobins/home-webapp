import { Router } from 'express'

import user from './users/users.route'

const router = Router();

router.get('/v1', (req, res) => {
  res.status(200).json({
    message: '🍕 Api route 🍕',
  });
});

// routes registration
router.use('/users', user);

export default router