const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const formRoutes = require('./routes/form');

// Connect to database 
connectDB()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/form', formRoutes);

app.get('/', (req, res) => {
  res.send('<h2>This is from index.js file</h2>');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});