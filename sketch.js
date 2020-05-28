const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bottle1;
var ground1;
var s1;
var ball1; 
var wood;
var chain1,constrainedlog;
var posX,posY;
var l1;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  a1 = new bottle(350,275,25,60);
 a2 = new bottle(375,275,25,60);
 a3 = new bottle(400,275,25,60);
 a4 = new bottle(425,275,25,60);
 a5 = new bottle(350,335,25,60);
 a6 = new bottle(375,335,25,60);
 a7 = new bottle(400,335,25,60);
 a8 = new bottle(425,335,25,60);
  b1 = new ground(320,235,200,200);
  s1 = new shooter(200,100,125,125);
  l1= new laser(200,200,5);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);


b1.display();
s1.display();
a1.display();
a2.display();
a3.display();
a4.display();
a5.display();
a6.display();
a7.display();
a8.display();
l1.display();
}


