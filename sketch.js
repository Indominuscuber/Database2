var canvas,backgroundImage;

var gameState=0;
var playerCount;

var database;
var form,player,game;

function setup(){
  canvas=createCanvas(400,400);
  database = firebase.database();
  console.log(database);
  
  game=new Game();
  game.getState();
  game.start();
  //hypnoticBall = createSprite(250,250,10,10);
  // hypnoticBall.shapeColor = "red";


  // var hypnoticBallPosition = database.ref('ball/position');
  // hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  // background("white");
  
  //   if(keyDown(LEFT_ARROW)){
  //     writePosition(-1,0);
  //   }
  //   else if(keyDown(RIGHT_ARROW)){
  //     writePosition(1,0);
  //   }
  //   else if(keyDown(UP_ARROW)){
  //     writePosition(0,-1);
  //   }
  //   else if(keyDown(DOWN_ARROW)){
  //     writePosition(0,+1);
  //   }
  //   drawSprites();
  
}

//function writePosition(x,y){
//   database.ref('ball/position').set({
//     'x': position.x + x ,
//     'y': position.y + y
//   })
// }

// function readPosition(data){
//   position = data.val();
//   console.log(position.x);
//   hypnoticBall.x = position.x;
//   hypnoticBall.y = position.y;
// }

// function showError(){
//   console.log("Error in writing to the database");
//}