const test = require('tape');
const assert = require('assert');
const client = require('../lib/queue_client');

const storageKey = "testKey";
const storageSecret = "testSecret";


test('Queue should throw an error if no Storage Account Provided', function(t){
  t.throws(() => {
    new client()
  }, new assert.AssertionError({
    message: 'Azure Storage Account Not Provided'
  }), 'throws assert error')
  t.end()
});

test('Queue should throw an error if no Storage Key Provided', function(t){
  t.throws(() => {
    new client({storageAccount: 'testAccount'})
  }, new assert.AssertionError({
    message: 'Azure Storage Key Not Provided'
  }), 'throws assert error')
  t.end()
});