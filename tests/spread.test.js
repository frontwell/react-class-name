import className from '../src'

test('spread', () => {
  expect({ ...className() }).toStrictEqual({ className: null })
  expect({ ...className('a') }).toStrictEqual({ className: 'a' })
})
