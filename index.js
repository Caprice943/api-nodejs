const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./controllers/postsController');
const bodyParser = require('body-parser');
const cors = require('cors');

//middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); //élargir l'accès 
app.use('/posts', postsRoutes);


app.listen(5500, () => console.log('Server started: 5500'));



