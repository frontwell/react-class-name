import className from '../src'

test('called with zero length strings', () => {
  expect(className([''])).toStrictEqual({ className: null })
  expect(className([''], [''])).toStrictEqual({ className: null })
  expect(className([''], [''], [''])).toStrictEqual({ className: null })

  expect(className([' '])).toStrictEqual({ className: null })
  expect(className([' '], [' '])).toStrictEqual({ className: null })
  expect(className([' '], [' '], [' '])).toStrictEqual({ className: null })
})

test('called with regular arrays', () => {
  expect(className(['a'])).toStrictEqual({ className: 'a' })
  expect(className(['a'], ['b'])).toStrictEqual({ className: 'a b' })
  expect(className(['a'], ['b'], ['c'])).toStrictEqual({ className: 'a b c' })

  expect(className(['a'])).toStrictEqual({ className: 'a' })
  expect(className(['a', 'b'])).toStrictEqual({ className: 'a b' })
  expect(className(['a', 'b', 'c'])).toStrictEqual({ className: 'a b c' })
})

test('called conditionally with regular arrays', () => {
  expect(className([true && 'a'])).toStrictEqual({ className: 'a' })
  expect(className([false && 'a'])).toStrictEqual({ className: null })

  expect(className([true && 'a', false && 'b', true && 'c'])).toStrictEqual({ className: 'a c' })
})
