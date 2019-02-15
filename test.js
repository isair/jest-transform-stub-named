const asset = require('./asset.png')

test('stubs imports as string', () => {
  expect(asset.uri).toBe('asset.png')
})
