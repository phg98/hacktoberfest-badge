import express from 'express';
// import dayjs from 'dayjs';
// import timezone from 'dayjs/plugin/timezone';
// import utc from 'dayjs/plugin/utc';
import { createBadge } from './createBadge';
import { sendText } from './sendText';


// dayjs.extend(utc);
// dayjs.extend(timezone);

/**
 * Badge를 만들어 주는 Router 입니다.
 * @param req express.Request
 * @param res express.Response
 * @returns
 */
export async function badgeRouter(req: express.Request, res: express.Response): Promise<void> {
	console.debug('got 1 req')
	if (typeof req.query.githubUserName !== 'string') {
		sendText('400 Bad Request', res);
		return;
	}
	const githubUserName = req.query.githubUserName as string;
	const color = req.query.color as string;
	console.debug(githubUserName)

	res.set('Content-Type','image/svg+xml');
	res.set('Cache-Control', 'no-cache');

	if (color) {
		res.send(await createBadge(githubUserName, color));
	} else {
		res.send(await createBadge(githubUserName));
	}

}