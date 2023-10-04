const express = require('express');
const path = require('path'); // Import the path module
const app = express();

// Set the views folder path using the path module
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

var products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99, description: 'Description for Product 1'},
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99, description: 'Description for Product 2'},
  { id: 3, name: 'Sony PlayStation 5', price: 499.99, description: 'Description for Product 3'},
  { id: 4, name: 'MacBook Pro 16', price: 2399.99, description: 'Description for Product 4'},
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99, description: 'Description for Product 5'},
];

app.get("/", function(req, res) {
  res.render('home', { products });
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.render('productDetails', { product });
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(3000);