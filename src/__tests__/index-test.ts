import {exportAllDeclaration} from '@babel/types';
import {foo} from '..';

describe('foo', () => {
	test('should return "bar', () => {
		expect(foo()).toBe('bar');
	});
});
