const express = require('express');
const connectDB = require('./config/db');
const path = require('path')

const app = express();

// Connect DataBase - 
connectDB();

// Init Middleware
app.use(express.json({ exteded: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/candidates', require('./routes/candidates'));
app.use('/api/organizations', require('./routes/organizations'));

// Serve Static Assets
// if (process.env.NODE_ENV === 'production') {
// 	// Set Static folder
// 	app.use(express.static('client/build'));

// 	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
// }


const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));