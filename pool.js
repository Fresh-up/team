const mysql = require('mysql')

let pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database: 'diary'
})

module.exports = {
    pool
}
