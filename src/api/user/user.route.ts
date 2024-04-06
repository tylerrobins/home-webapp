import {Router, Request, Response } from 'express'
import { AppDataSource } from '../../data-source.config'
import User from '../../entity/user.entity'

const router = Router();

router.get('/createuser', (req, res) => {
  res.status(200).json({
    'user': "user route"
  });
});

router.post("/createuser", async (req: Request, res: Response) => {
  const username = req.query.username?.toString()
  const email = req.query.email?.toString()
  const password = req.query.password?.toString()

  const userRepository = AppDataSource.getRepository(User);

  const user: User = userRepository.create({username: username, email:email, password: password})

  await userRepository.save(user);
  return res.json({"user created": user})
});

export default router;