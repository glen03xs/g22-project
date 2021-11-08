const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DataBase - 
connectDB();

// Init Middleware
app.use(express.json({ exteded: false }));

app.get('/', (req, res) =>
	res.json({
		msg: 'Setup is good',
	})
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/candidates', require('./routes/candidates'));
app.use('/api/organization', require('./routes/organizations'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));