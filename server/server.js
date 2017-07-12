const express=require('express');
const sock=require('socket.io');
const http=require('http');
var app=express();

var server=http.createServer(app);

//app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));


var io=sock(server);

io.on('connection',(socket)=>{
console.log('new user connected');


socket.broadcast.emit('newMessage',{
  
  user: 'admin',
  text : 'new user joined'
});
/*
socket.emit('newMessage',{

    
    text : 'what is goig on'
    
});*/

socket.on('createMessage',function(doc,callback){
   // console.log(doc);

    io.emit('newMessage',{
       // newmsg : 'new user connected',
        user: doc.user,
        text :doc.text
    });

callback();
/*
    socket.emit('newMessage',{
name: doc.name,
email : doc.emailS
    });*/

});

socket.on('geo-loc',function(pos){
    console.log(pos);
    io.emit('newLocationMessage',{
        user:'user',
        url: `https://www.google.com/maps?q=${pos.latitude},${pos.longitude}`
    });
});


socket.on('disconnect',()=>{
    console.log('user disconnected');
});

});
//console.log(__dirname);



server.listen(3000,()=>{
    console.log('app starting ....');
});