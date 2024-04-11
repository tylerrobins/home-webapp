import { Router, Request, Response } from 'express';
import { AppDataSource } from '../../data-source.config';
import User from '../../entity/user.entity';
import * as argon2 from 'argon2';

const router = Router();

router.get('/', (req: Request, res: Response): Response => {
	return res.status(200).json({
		message: '🍕 USER 🍕',
	});
});

router.post('/create', async (req: Request, res: Response): Promise<Response> => {
	const username = req.body.username?.toString();
	const email = req.body.email?.toString();
	const password = await argon2.hash(req.body.password?.toString());

	const userRepository = AppDataSource.getRepository(User);
	const user: User = userRepository.create({
		username: username,
		email: email,
		password: password,
	});
	await userRepository.save(user);
	console.log('change');
	return res.json({ 'user created': user });
});

router.post('/login', async (req: Request, res: Response): Promise<Response> => {
	console.log('Login Request');
	const email = req.body.email?.toString();
	const password = req.body.password?.toString();

	if (!email || !password) {
		return res.status(400).json({ Error: 'Email and password are required' });
	}

	const userRepository = AppDataSource.getRepository(User);
	try {
		const user: User = await userRepository.findOneByOrFail({ email: email });
		if (await argon2.verify(user.password, password)) {
			req.session!.userId = user.id;
			return res.json({ Login: 'Successful' });
		} else {
			return res.json({ Failed: 'Password did not match' });
		}
	} catch (err) {
		console.log(err);
	}
	return res.json({ Failed: true });
});

export default router;
