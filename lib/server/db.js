const pg = require('pg');
const conString = process.env.CONNECTION_STRING

var pool = new pg.Client(conString);
pool.connect();

module.exports = pool;