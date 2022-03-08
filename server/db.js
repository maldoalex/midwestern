const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'AlexM',
  password: 'Alex0923$',
  host: 'localhost',
  port: 5434,
  database: 'midwestern'
});

module.exports = pool;