require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./connection');


//create server
const cookPediaServer = express();
cookPediaServer.use(cors());
cookPediaServer.use(express.json({limit:'10mb'})); //in case we sent large payloads
cookPediaServer.use(routes);

//set the port
const PORT = 4000  || process.env.PORT

cookPediaServer.listen(PORT, ()=> {
  console.log(`Server running successfully at PORT ${PORT}...`
)})


