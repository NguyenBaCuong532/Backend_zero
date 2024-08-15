const connect =require('mysql2/promise');

module.exports = connect.createPool({
    host: 'localhost',
    database: 'test',
    user: 'root',
    password: 'root',
});