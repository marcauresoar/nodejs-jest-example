const axios = require('axios')

const functions = require('../functions.js')

// beforeEach(() => {
//     console.log('Initializing...')
// })

// afterEach(() => {
//     console.log('Finished.')
// })

test('should add 2 + 2 and get 4', () => {
    const result = functions.add(2, 2)
    expect(result).toBe(4)
})

test('should add 2 + 2 and not get 5', () => {
    const result = functions.add(2, 2)
    expect(result).not.toBe(5)
})

test('should be null', () => {
    const result = functions.isNull()
    expect(result).toBeNull()
})

test('should be falsy', () => {
    const value = null
    const result = functions.checkValue(value)
    expect(result).toBeFalsy()
})

test('should return user correctly', () => {
    const result = functions.createUser()
    const expected = {
        firstName: 'Marco',
        lastName: 'Soares'
    }
    expect(result).toEqual(expected)
})

test('should fetch user correctly', async () => {
    const mockedUrl = 'https://jsonplaceholder.typicode.com/users/1'
    const mockedName = 'Leanne Graham'
    const mockedData = {
        data: {
            name: mockedName
        }
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(mockedData))

    const result = await functions.fetchUser(mockedUrl)

    expect(axios.get).toBeCalledWith(mockedUrl)
    expect(result.name).toEqual('Leanne Graham')
})

test('should fail to fetch user', async () => {
    const mockedUrl = 'https://jsonplaceholder.typicode.com/users/1'
    const mockedError = new Error('fake')
    axios.get.mockImplementationOnce(() => Promise.reject(mockedError))

    const result = await functions.fetchUser(mockedUrl)

    expect(axios.get).toBeCalledWith(mockedUrl)
    expect(result).toEqual(mockedError)
})

