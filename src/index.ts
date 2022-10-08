import express from 'express';
import { badgeRouter } from './badgeRouter';
import { sendText } from './sendText';

const app = express();

app.get('/', badgeRouter);

app.use((_req, res, _next) => {
	sendText('404 Not Found', res);
});

const listener = app.listen(process.env.PORT || 3000, () => {
	console.info('Server Started');
	console.info(JSON.stringify(listener.address()));
});

export default listener;