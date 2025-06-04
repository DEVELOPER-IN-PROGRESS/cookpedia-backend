//import mongoose
//
const mongoose = require('mongoose')
const connection_string = process.env.DATABASE;

mongoose.connect(connection_string).then( (res) => { console.log(`Mongo db connected successfully..`);
 })
.catch( error => console.log(`Mongodb connection failed due to ${error}`));

