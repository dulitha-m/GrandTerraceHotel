const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const restaurantRouter = require('./routes/restaurants');
app.use('/restaurants', restaurantRouter);

// Database Connection
mongoose.connect('mongodb://localhost:27017/grandterrace', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB database connection established successfully'))
.catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
