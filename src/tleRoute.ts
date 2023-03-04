import { RouteShorthandOptions } from 'fastify';

const opts: RouteShorthandOptions = {
	schema: {
		response: {
			200: {
				type: 'object',
				properties: {
					pong: {
						type: 'string',
					},
				},
			},
		},
	},
};

// server.get('/ping', opts, async (request, reply) => {
// 	return { pong: 'it worked!' };
// });


