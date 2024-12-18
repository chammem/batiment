const express =require('express');
const http =require('http');
const mongo = require ('mongoose');


const joueurRouter = require ('./routes/joueur');
const partieRouter = require ('./routes/partie');
const batimentRouter = require ('./routes/batiment.js');


const path=require('path');
const {newpartiesocket}=require("./controller/partieController")
const {affichersocket}=require("./controller/partieController.js")
const {getnonbati}=require("./controller/batimentController.js")

const db = require('./config/db.json');
const { Socket } = require('socket.io');
mongo
     .connect(db.url)
     .then(console.log("database connected"))
     .catch((err)=> {
       console.log(err);});
var app = express();
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use('/users',joueurRouter);
app.use('/users',partieRouter);
app.use('/batiment',batimentRouter);


const server = http.createServer(
  app,console.log("server is run")
)

const io = require('socket.io')(server);
io.on("connection",(socket)=>{
    console.log("user is connected");
    socket.emit("msg","user is connected");

    

    socket.on("partie",(data)=>{
        console.log(JSON.stringify(data))
        newpartiesocket(data);
    io.emit("partie",data);
    })

    socket.on("partie",(data)=>{
      console.log(JSON.stringify(data))
      newpartiesocket(data);
  io.emit("partie",data);
  })

        socket.on("aff",async (data)=>{
          const datanew = await  affichersocket(data);
        io.emit("aff",datanew);
        })

      

        socket.on('construire', async (data) => {
          const niveauxNonConstruits = await getnonbati();
          socket.emit('construire', niveauxNonConstruits);  // Envoi des niveaux non construits au client
      });

      
    socket.on("disconnect", ()=> {
    console.log("user is disconnect")
    io.emit("msg","user is disconnected");

    });
});


server.listen(3000);
module.exports = app;
