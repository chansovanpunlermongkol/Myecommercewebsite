const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(express.static('views'));

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

const PORT = 3000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
