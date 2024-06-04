require('dotenv').config({ path: '../.env' })

const Pool = require('pg').Pool

const db = new Pool({
    connectionString: process.env.POSTGRES_URL,
})

module.exports = { db }