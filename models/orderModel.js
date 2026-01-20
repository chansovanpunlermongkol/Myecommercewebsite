const db = require('../config/db');

exports.createOrder = (user_id, product_id, quantity, callback) => {
  db.query('INSERT INTO orders (user_id, product_id, quantity,status) VALUES (?,?,?,?)',
    [user_id, product_id, quantity, 'pending'], callback);
};

exports.getOrdersByUser = (user_id, callback) => {
  db.query('SELECT orders.*, products.name, products.price FROM orders JOIN products ON orders.product_id = products.id WHERE user_id=?', [user_id], callback);
};

exports.getAllOrders = (callback) => {
  db.query('SELECT orders.*, users.username, products.name FROM orders JOIN users ON orders.user_id = users.id JOIN products ON orders.product_id = products.id', callback);
};
