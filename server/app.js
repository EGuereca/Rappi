require('dotenv').config({ path: './config/.env' });

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const compraRoutes = require('./src/routes/compraRoutes');
const cors = require('cors');
const sequelize = require('./src/config/database');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/compras', compraRoutes);
app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});