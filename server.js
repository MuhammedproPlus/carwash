import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
//  mongodb connection
import connectToDb from './connection/config.js';
import 'dotenv/config'
import router from './routes/router.js';
//import teamRouter from './router/teamRouter.js';
const app = express();
const PORT = process.env.PORT


// get data from body 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connectToDb()

app.use(cors());
app.use(morgan('tiny'));
app.use('/api/v1',router)

app.use("*", function (req, res) {
    res.status = 200;
    res.json({ status: "Welcome Staycia" });
  });
  //app.use('/api/team', teamRouter)
  app.listen(PORT, () => {
      console.log(`PORT is ${PORT}` || 9080);
  })