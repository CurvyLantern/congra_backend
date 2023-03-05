import cors from '@fastify/cors';
import Fastify, { FastifyInstance } from 'fastify';

import env from '@fastify/env';
import EnvOptions from './plugins/env';

const app: FastifyInstance = Fastify({ logger: true });

const appReady = async () => {
	await app
		.register(cors, {
			origin: '*',
		})
		.register(env, EnvOptions)
		.after();
	return app;
};

export default appReady;
