/**
 * Created by Jerome on 03-03-17.
 */

var Client = {};
var playerId;
Client.socket = io.connect();

Client.sendTest = function(){
    console.log("test sent");
    Client.socket.emit('test');
};

Client.getPlayerId = function(){
    console.log("retrieving player ID from server");
    Client.socket.emit('getClientId');
};

Client.socket.on('receiveClientId', function(data){
    console.log(data);
    playerId = data.playerId;
});

Client.showPlayerId = function(){
    console.log(playerId);
};

Client.askNewPlayer = function(){
    console.log("new P asked");
    Client.socket.emit('newplayer');
};

Client.sendClick = function(){
  Client.socket.emit('click', {x:1, y:1});
};

Client.socket.on('newplayer',function(data){
    Game.addNewPlayer(data.id,data.x,data.y);
});

Client.socket.on('allplayers',function(data){
    console.log("Recieved all players message "+ data);
});