const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'root',
    password:'9919',

})
module.exports = pool.promise();