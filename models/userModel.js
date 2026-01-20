const db = require('../config/db');

exports.findByEmailAndPassword = (email, password, callback) => {
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], callback);
};

exports.createUser = (username, email, password, callback) => {
  db.query('INSERT INTO users (username,email,password) VALUES (?,?,?)', [username,email,password], callback);
};
