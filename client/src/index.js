import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(<App />,document.getElementById("root"));

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io') (http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
       io.emit('chat message',msg)
      });
    });
    

    http.listen(port, function(){
        console.log('listening on *:' + port);
});

registerServiceWorker();
