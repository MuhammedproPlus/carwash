import express from 'express' // import express module
import morgan from 'morgan' // import morgan module
import cors from 'cors' // import cors module
//  mongodb connection
import connectToDb from './connection/config.js'; // import mongodb connection
import 'dotenv/config' // import dotenv module
import router from './routes/router.js'; // import router
//import teamRouter from './router/teamRouter.js'; // import teamRouter
const app = express(); // create express app
const PORT = process.env.PORT // get port from environment variables

// get data from body 
app.use(express.urlencoded({ extended: true })) // parse urlencoded bodies
app.use(express.json()) // parse json bodies

connectToDb() // connect to mongodb

app.use(cors()); // enable cors
app.use(morgan('tiny')); // log requests
app.use('/api/v1',router) // use router

app.use("*", function (req, res) { // handle all other routes
    res.status = 200;
    res.json({ status: "Welcome Staycia" });
  });
  //app.use('/api/team', teamRouter) // use teamRouter
  app.listen(PORT, () => { // listen on port
      console.log(`PORT is ${PORT}` || 9080);
  })