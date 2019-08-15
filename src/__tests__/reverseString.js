const reverseString = require('../reverseString.js')

test('should find reverseString function', () => {
    expect(reverseString).toBeDefined()
})

test('should reverse string correctly', () => {
    const forwards = 'abc'
    const backwards = 'cba'
    const result = reverseString(forwards)
    expect(result).toEqual(backwards)
})

test('should reverse string correctly with uppercase', () => {
    const forwards = 'abC'
    const backwards = 'cba'
    const result = reverseString(forwards)
    expect(result).toEqual(backwards)
})