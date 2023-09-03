 
 const dotenv = require('dotenv')
 dotenv.config() ;
 const USERNAME= process.env.DB_USERNAME;
 const PASSWORD= process.env.DB_PASSWORD;
 module.exports = {
   MONGOBD_URL:`mongodb+srv://${USERNAME}:${PASSWORD}@reactogram.6q5z3b0.mongodb.net/reactogram?retryWrites=true&w=majority`,
   JWT_SECRET: "hafsfffgg72846285jjjkh54646467hh",


}
