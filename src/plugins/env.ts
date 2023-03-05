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
	schema,
};
export default EnvOptions;
