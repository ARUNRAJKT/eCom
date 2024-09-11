const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
// Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({ success: true });
});

//routes been used
app.use('/admins', adminRoutes);
app.use('/user', userRoutes);



// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    app.listen(process.env.NODE_PORT, () => {
        console.log(`Server running on http://localhost:${process.env.NODE_PORT}`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
