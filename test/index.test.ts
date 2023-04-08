import className from '../src'

describe('basics', () => {
  test('is a function', () => {
    expect(className).toEqual(expect.any(Function))
  })

  test('called without arguments', () => {
    expect(className()).toBeUndefined()
  })
})

describe('strings', () => {
  test('called with zero length strings', () => {
    expect(className('')).toBeUndefined()
    expect(className('', '')).toBeUndefined()
    expect(className('', '', '')).toBeUndefined()

    expect(className(' ')).toBeUndefined()
    expect(className(' ', ' ')).toBeUndefined()
    expect(className(' ', ' ', ' ')).toBeUndefined()
  })

  test('called with regular strings', () => {
    expect(className('a')).toBe('a')
    expect(className('a', 'b')).toBe('a b')
    expect(className('a', 'b', 'c')).toBe('a b c')
  })

  test('called conditionally with regular strings', () => {
    expect(className(true && 'a')).toBe('a')
    expect(className(false && 'a')).toBeUndefined()
  })
})

describe('arrays', () => {
  test('called with zero length strings', () => {
    expect(className([''])).toBeUndefined()
    expect(className([''], [''])).toBeUndefined()
    expect(className([''], [''], [''])).toBeUndefined()
  })

  test('called with empty strings', () => {
    expect(className([' '])).toBeUndefined()
    expect(className([' '], ['  '])).toBeUndefined()
    expect(className([' '], ['   '], ['     '])).toBeUndefined()
  })

  test('called with regular arrays', () => {
    expect(className(['a'])).toBe('a')
    expect(className(['a'], ['b'])).toBe('a b')
    expect(className(['a'], ['b'], ['c'])).toBe('a b c')

    expect(className(['a'])).toBe('a')
    expect(className(['a', 'b'])).toBe('a b')
    expect(className(['a', 'b', 'c'])).toBe('a b c')
  })

  test('called conditionally with regular arrays', () => {
    expect(className([true && 'a'])).toBe('a')
    expect(className([false && 'a'])).toBeUndefined()

    expect(className([true && 'a', false && 'b', true && 'c'])).toBe('a c')
  })

  test('deep arrays', () => {
    expect(className([[['a']]])).toBe('a')
  })
})

describe('objects', () => {
  test('called conditionally with plain objects', () => {
    expect(className({ a: true })).toBe('a')
    expect(className({ a: false })).toBeUndefined()
  })
})

describe('functions', () => {
  test('basic function', () => {
    expect(className(() => 'a')).toBe('a')
  })
})
