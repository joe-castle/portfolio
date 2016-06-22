import test from 'tape';
import request from 'supertest';
import app from '../src/routes';

test('Express Routes to the Root path', assert => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/, assert.end);
});
