const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4;
var shooter1;
var sling;
var ground1;
var bot;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  b1 = new box(614,118,40,40);
  b2 = new box(614,118,40,40);
  b3 = new box(642,118,40,40);
  b4 = new box(640,118,40,40);
  b5 = new box(610,300,40,40);
  b6 = new box(610,300,40,40);
  b7 = new box(650,300,40,40);
  b8 = new box(650,300,40,40);
  b9 = new box(287,32,40,40);
b10 = new box(325,32,40,40);
b11 = new box(363,32,40,40);
b12 = new box(405,32,40,40);
 ground1 = new ground(627,142,160,10);
 ground2 = new ground(627,326,160,10);
 ground3 = new ground(345,65,160,10);
 shooter1 = new shooter(30,400,20);
sling = new slingshot (shooter1.body,{x:125, y:260});

}
function draw() {
  background(51,255,255);  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
shooter1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
 b5.display();
  b6.display();
  b7.display();
  b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
drawSprites();
sling.display();
fill("black");
text("Press Space to re-attach ball",372,242);
}

function mouseDragged(){
  Matter.Body.setPosition(shooter1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
     sling.attach(shooter1.body);
  }
}