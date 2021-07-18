module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						components: './src/components',
						screens: './src/screens',
						navigation: './src/navigation',
						constants: './src/constants',
						utils: './src/utils',
						assets: './src/assets',
						models: './src/models',
						store: './src/store',
					},
				},
			],
		],
	};
};
