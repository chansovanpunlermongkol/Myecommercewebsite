const db = require('../config/db');

//Admin Login 
exports.login = (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@gmail.com' && password === '123456') {
        // send admin info
        res.json({ id: 1, email, role: 'admin' });
    } else {
        res.status(401).send('Wrong credentials');
    }
};

// Add Product 
exports.addProduct = (req, res) => {
    const { name, price } = req.body;
    if (!name || !price || price <= 0) return res.status(400).send('Invalid product data');

    const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
    db.query(sql, [name, price], (err, result) => {
        if (err) return res.status(500).send('Error adding product');
        res.send('Product added successfully');
    });
};

// Update Product 
exports.updateProduct = (req, res) => {
    const { id, name, price } = req.body;
    if (!id || !name || !price || price <= 0) return res.status(400).send('Invalid product data');

    const sql = 'UPDATE products SET name = ?, price = ? WHERE id = ?';
    db.query(sql, [name, price, id], (err, result) => {
        if (err) return res.status(500).send('Error updating product');
        res.send('Product updated successfully');
    });
};

//  Delete Product 
exports.deleteProduct = (req, res) => {
    const { id } = req.body;
    if (!id) return res.status(400).send('Product ID required');

    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send('Error deleting product');
        res.send('Product deleted successfully');
    });
};

//  Get All Orders
exports.getOrders = (req, res) => {
    const sql = `
        SELECT o.id, o.user_id, o.product_id, o.quantity,
               p.name AS product_name
        FROM orders o
        JOIN products p ON o.product_id = p.id
        ORDER BY o.created_at DESC
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send('Error fetching orders');
        res.json(results);
    });
};
