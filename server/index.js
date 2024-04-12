import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import postRoutes from './routes/posts.js'

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
// extended object;
// json for json obj
// urlencoded for form data;
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// this is like adding a /posts to each
// ie available at localhost:5000/posts now 
// and not localhost:5000/
app.use(cors());
app.use('/memories',postRoutes);




// using mongodb.com/cloud/atlas
const CONNECTION_URL = "mongodb+srv://umair1216:umairbeig@cluster0.i6xsqgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL).then(
    () => app.listen(PORT, () => console.log("server running on  :"+PORT))).catch(
        (error) => console.log(error.message)
    );
    

