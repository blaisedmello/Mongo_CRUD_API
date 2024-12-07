require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
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

// Routes
app.use('/api/products', productRoute);

// Get api route
app.get('/', (req, res) => {
    res.send("Hello from node api")
});

// Set a port to listen onto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});