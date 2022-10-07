const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path')
const app = express();

dotenv.config();
app.use(express.json());

const port  = process.env.PORT || 3000;
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((console.log('db connected')))


app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


app.listen(port, () => (console.log('app is listening on port', port)))