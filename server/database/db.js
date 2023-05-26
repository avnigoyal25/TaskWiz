import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection=()=>{

    const MONGODB_URI= `mongodb://${USERNAME}:${PASSWORD}@ac-2mshnfq-shard-00-00.mlsczub.mongodb.net:27017,ac-2mshnfq-shard-00-01.mlsczub.mongodb.net:27017,ac-2mshnfq-shard-00-02.mlsczub.mongodb.net:27017/?ssl=true&replicaSet=atlas-o5yw7s-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI);

    mongoose.connection.on(`connected`,()=>{
        console.log("Database connected succesfully");
    })

    mongoose.connection.on(`disconnected`,()=>{
        console.log("Database disconnected");
    })

    mongoose.connection.on(`error`,()=>{
        console.log(`error while connecting`,error.message);
    })
}

export default Connection;