const express = require('express');
const PORT = 4000;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const dotenv = require('dotenv')
// dotenv.config() ;
// const USERNAME= process.env.DB_USERNAME;
// const PASSWORD= process.env.DB_PASSWORD;
const { MONGOBD_URL } = require('./config')

// const MONGOBD_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@reactogram.6q5z3b0.mongodb.net/reactogram?retryWrites=true&w=majority`

global.__basedir = __dirname;
// mongoose.set('strictQuery', true);
mongoose.connect(MONGOBD_URL , {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log("DB is connected");
})
mongoose.connection.on('error', (error) => {
    console.log("Some error while connecting to the DB" , error.message);
})

require('./models/user_model');
require('./models/post_model');

app.use(cors());
app.use(express.json());

app.use(require('./routes/user_route'));
app.use(require('./routes/post_route'));
app.use(require('./routes/file_route'));

app.listen(PORT, () => {
    console.log("Server started");
});