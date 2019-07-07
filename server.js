const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const socket = require("socket.io");
const http = require("http");
const isOnline = require("is-online");

const policyHolderRoutes = require('./src/services/PolicyHolderService');

const init = express();

init.use(
    bodyParser.urlencoded({
        extended: false
    })
);
init.use(bodyParser.json())

const database = 'mongodb://localhost:27017/donewelldb-local'
// isOnline().then(online => {
//     if(online){ 
//         return require("./config/keys").mongoURI;
//     }
//     else{
//         return 'mongodb://localhost/donewell_backend';
//     }
// });

// To MongoDB
mongoose
    .connect(
        database,
        {useNewUrlParser: true}
    )
    .then(() => console.log("Mongoose Database Connection Success"))
    .catch(e => console.log(e));

// Attach Policy Holder Service Routes
init.use('/holders', policyHolderRoutes)
// Initializing server and socket
const server = http.createServer(init);
const webSocket = socket(server);
// Port
const port = process.env.PORT || 4000;
// Assign server to a port
server.listen(port, () => console.log("Connected.."));

// When client Connects
webSocket.on('connection', (client) => {
    console.log('Connected with data')

    client.on('login', info => {
        
    });
    client.on('submit', data => {
        console.log(data);
    });
})

