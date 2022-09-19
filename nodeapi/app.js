const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var app = express();
const WS_MODULE = require("ws");
const http = require("http");
app.use(cors);
app.use(cookieParser());
const server = http.createServer(app);
wss = new WS_MODULE.Server({ server });

wss.on("connection", (ws) => {
  ws.send('Welcome to the chat, enjoy :)');
  console.log('connected');
  ws.on('message', (data) => {
    wss.clients.forEach((client) => {
      console.log(data,'client message');
      client.send(data);
    });

  });
});

wss.on("message",(data)=>{
  console.log(data,'from');
})

server.listen(443, () => {
  console.log(`Websocket listening on the port::${443}`);
});
