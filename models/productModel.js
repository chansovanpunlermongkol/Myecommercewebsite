const db = require('../config/db');

exports.getAllProducts = (callback) => {
  db.query('SELECT * FROM products', callback);
};

exports.addProduct = (name, price, callback) => {
  db.query('INSERT INTO products (name, price) VALUES (?,?)', [name, price], callback);
};

exports.updateProduct = (id, name, price, callback) => {
  db.query('UPDATE products SET name=?, price=? WHERE id=?', [name, price, id], callback);
};

exports.deleteProduct = (id, callback) => {
  db.query('DELETE FROM products WHERE id=?', [id], callback);
};
