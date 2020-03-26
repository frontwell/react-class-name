import className from '../src'

test('called conditionally with plain objects', () => {
  expect(className({ a: true })).toStrictEqual({ className: 'a' })
  expect(className({ a: false })).toStrictEqual({ className: null })
})
