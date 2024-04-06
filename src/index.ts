import app from './app'

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server is up at port http://localhost:${port}`);
});