import express from 'express';
import dotenv from 'dotenv';

import http from 'http';
import socketIO from 'socket.io';
import httpServer from 'http-server';
import cors from 'cors';
//import {v4 as UUIDv4} from 'UUID' 


//import routes from 'routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// our server instance
const server = http.createServer(app);
const socketServer = http.createServer(app);

var gameData = {
  gameState: 'pause',
  players: [],
  entities: []
}

// This creates our socket using the instance of the server
const io = socketIO(socketServer, {
   cors: {
     origin: '*',
     methods: ['GET', 'POST']
   }
 });

 app.use(cors()); // add this line

 console.log('NSERVER NOW RUNNING!!!!');

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected', socket.id);

  //Add Player to player list
  gameData.players.push({id: socket.id, x:0, y:0});
  console.log('Player List: ', gameData.players);

  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('change name', (name) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('Player Set Name: ', name, socket.id);
    //io.sockets.emit('change color', name)
  })

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    gameData.players = gameData.players.filter(v => v.id !== socket.id); 
    console.log('user disconnected', socket.id, 'User Array: ', gameData.players);
  })
})

io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
  alert(`connect_error due to ${err.message}`);
});

 // Specifying to use urlencoded
app.use(express.urlencoded({ extended: false }))

//URL which will accept socket connection
//const liveData = io.of("/liveData");


const port = 4001;
io.listen(port, () => {
   console.log(`Socket Server listening on port ${port}`)
});

//app.get('/', ({ url: { path: pathname = '/' } }, res) => res.send(renderToString(routes, pathname)))

// request handlers
app.get('/test', (req, res) => {
   console.log('Someone tested me...')
   res.send('The server is running...');
 });


app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`)
});

export default app;
