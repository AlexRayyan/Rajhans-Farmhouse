const test = require('node:test');
const assert = require('node:assert/strict');
const pkg = require('../package.json');
test('Expo project configured', () => assert.equal(pkg.name, 'rajhans-farmhouse-admin'));
