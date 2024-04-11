import { AppDataSource } from './data-source.config'
 
import app from './app'

const port = process.env.PORT || 8000;

const main = async () => {
	const db = await AppDataSource.initialize()
		.then(() => {
			console.log('CONNECTED TO DB');
		})
		.catch((err: Error) => {
			console.log('DB ERROR', err);
		})
	app.listen(port, () => {
		console.log(`Server is up at port http://localhost:${port}`);
	});
}

main().catch((err) => {
	console.log(err);
});