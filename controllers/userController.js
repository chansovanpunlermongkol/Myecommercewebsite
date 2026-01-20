const User = require('../models/userModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');

// Register a new user
exports.register = (req, res) => {
  const { username, email, password } = req.body;

  User.createUser(username, email, password, (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(500).send('Error registering user');
    }
    res.send('User registered successfully');
  });
};

// User login
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmailAndPassword(email, password, (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      return res.status(500).send('Login error');
    }

    if (!result || result.length === 0) {
      return res.status(401).send('Wrong credentials');
    }

    res.send('User logged in successfully');
  });
};

// View all products
exports.viewProducts = (req, res) => {
  console.log('Products API called');

  Product.getAllProducts((err, result) => {
    if (err) {
      console.error('Error fetching products:', err);
      return res.status(500).send('Database query error');
    }
    res.json(result);
  });
};

// Buy a product
exports.buyProduct = (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  Order.createOrder(user_id, product_id, quantity, (err, result) => {
    if (err) {
      console.error('Error placing order:', err);
      return res.status(500).send('Error placing order');
    }
    res.send('Order placed successfully');
  });
};

