module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'header-max-length': [2, 'always', 140],
		'scope-empty': [2, 'never'],
		'scope-enum': () => [2, 'always', ['all']]
	}
};
