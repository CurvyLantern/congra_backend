import appReady from './app';
import { SAT_NAMES } from '../db/SAT_NAMES';
import { TLE } from '../db/TLE2';
import cors from '@fastify/cors';

const start = async () => {
	const app = await appReady();
	try {
		app.get('/', (req, res) => {
			return { hello: 'world' };
		});

		app.get('/v1/tle', async (req, res) => {
			return TLE;
		});
		app.get('/v1/info/satellite', async (req, res) => {
			return SAT_NAMES;
		});

		// @ts-ignore
		await app.listen({ port: process.env.PORT });

		const address = app.server.address();
		const port = typeof address === 'string' ? address : address?.port;
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();
