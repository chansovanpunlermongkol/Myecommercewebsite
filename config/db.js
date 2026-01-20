
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '******',   //SQL password   
  database: 'shop_clothess'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = db;
