const schema = {
	type: 'object',
	required: ['PORT'],
	properties: {
		PORT: {
			type: 'string',
			default: 8000,
		},
	},
};

const EnvOptions = {
	confkey: 'config',
	dotenv: true,
	schema,
	data: process.env,
};
export default EnvOptions;
