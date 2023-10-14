const axios = require('axios')

const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/sousaz/um-clipe-uma-musica-mockData/main/api'
})

module.exports = api