import { connect } from 'mongoose';
import { MONGODB_URI } from "../config.js"

//Connection to db

(async()=>{
    try{
        const db = await connect(MONGODB_URI);
        console.log("Db connectect to",db.connection.name);
    }catch(err){
        console.log(err);
    }
})();
