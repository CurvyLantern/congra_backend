import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import cors from '@fastify/cors';

const app: FastifyInstance = Fastify({logger:true});


export default app;


