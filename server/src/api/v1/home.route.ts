import { Router, Request, Response } from 'express';
import { AppDataSource } from '../../data-source.config';
import Home from '../../entity/home.entity';

const router = Router()

router.get('/', (req: Request, res: Response): Response => {
	return res.status(200).json({
		message: '🍕 HOME 🍕',
	});
});

router.post('/create', (req: Request, res: Response) => {

    const homeRepository = AppDataSource.getRepository(Home);
    const home: Home = homeRepository.create({
        
    });
})

export default router;