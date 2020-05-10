const downfor = require('../src/downfor.js')

test('empty url returns false', async () => {
 
  const data = await downfor('')

  expect(data).toBe(false)

});

test('google should be returned object', async () => {
  
  const data = await downfor('google.com')

  expect(typeof data).toBe('object')

});


test('down domain should be returned false', async () => {
  
  const data = await downfor('thisdomainneverrunontheweb')

  expect(data.isDown).toBe(true)

});

test('twitter should be returned 200', async () => {

  const data = await downfor('twitter.com')

  expect(data.statusCode).toBe(200)

});
