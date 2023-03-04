import app from './app';
import { SAT_NAMES } from '../db/SAT_NAMES';
import { TLE } from '../db/TLE2';
import cors from '@fastify/cors';

const start = async () => {
	try {
		await app
			.register(cors, {
				origin: '*',
			})
			.after();

		app.get('/', (req, res) => {
			return { hello: 'world' };
		});

		app.get('/v1/tle', async (req, res) => {
			return TLE;
		});
		app.get('/v1/info/satellite', async (req, res) => {
			return SAT_NAMES;
		});

		await app.listen({ port: 8000 });

		const address = app.server.address();
		const port = typeof address === 'string' ? address : address?.port;
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();
