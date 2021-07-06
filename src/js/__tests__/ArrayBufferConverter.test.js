import getBuffer from '../app';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Test ArrayBufferConverter', () => {
  const arrayBuf = new ArrayBufferConverter();
  arrayBuf.load(getBuffer());
  expect(arrayBuf.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
