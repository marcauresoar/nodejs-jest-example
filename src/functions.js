const axios = require('axios')

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Marco' }
        user.lastName = 'Soares'
        return user
    },
    fetchUser: (url) => {
        return axios.get(url)
            .then(res => res.data)
            .catch(err => err)
    }
    
}

module.exports = functions