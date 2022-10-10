import express from 'express';
import data from './data.js';
const app = express();
app.use(express.json());

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/slug/:slug', (req, res) => {
    const productId = req.params.slug;
    const product = data.products.find(x => (x.slug === productId));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product not found!'});
    }
})

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => (x._id === productId));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product not found!'});
    }
})


const port = process.env.PORT || 5000;


app.listen(port, () => (console.log('app is listening on port', port)));


