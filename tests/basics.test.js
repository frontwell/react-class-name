import className from '../src'

test('is a function', () => {
  expect(className).toEqual(expect.any(Function))
})

test('called without arguments', () => {
  expect(className()).toStrictEqual({ className: null })
})
