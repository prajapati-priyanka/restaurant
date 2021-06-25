const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'restaurants',
  password: 'root',
  port: 5432,
});

const getRestaurants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM restaurant_tbl ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  module.exports = { getRestaurants }