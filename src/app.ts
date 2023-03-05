import Fastify, { FastifyInstance } from 'fastify';

const app: FastifyInstance = Fastify({
	logger: {
		enabled: process.env.NODE_ENV === 'development',
	},
});
export default app;
