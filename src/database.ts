import key from './key';
const mysql = require('promise-mysql');

const pool = mysql.createPool(key.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('Database is Connected');
    });

export default pool;
