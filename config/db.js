const Pool = require('pg').Pool

const db = new Pool({
    user: "alex",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "wizeq"
})

module.exports = { db }