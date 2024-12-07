require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

app.use(express.json());

// Connect to mongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database")
    })
    .catch((err) => {
        console.error("Database Connection Failed:", err.message);
    });

// Get api route
app.get('/', (req, res) => {
    res.send("Hello from node api")
});

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Get product by id
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Create product
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Update product
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete product
app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted Successfully" })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Set a port to listen onto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});