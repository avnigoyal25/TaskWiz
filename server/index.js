import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from './routes/route.js';

const app=express();
app.use(cors());


app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}))

app.use('/',Routes);

const PORT= process.env.PORT || 8000;

Connection();

app.listen(PORT, ()=>console.log(`your server is running succesfully on port ${PORT}`));