import Fastify, { FastifyInstance } from 'fastify';

const app: FastifyInstance = Fastify({ logger: true });
export default app;
