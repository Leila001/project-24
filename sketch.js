
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber
var sand
var iron
var s1
var s2
var s3
var s4
var s5
var s5
var s6
var s7
var s8
var s9 
var s10
var hammer
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(100,100,70,30)
rubber=new Rubber(600,100,30)
stone=new Stone(300,300,70,70)
s1=new Sand(310,30,5)
s2=new Sand(320,30,5)
s3=new Sand(330,30,5)
s4=new Sand(340,30,5)
s5=new Sand(350,30,5)
s6=new Sand(360,30,5)
s7=new Sand(370,30,5)
s8=new Sand(380,30,5)
s9=new Sand(390,30,5)
s10=new Sand(400,30,5)
iron=new Iron(100,200,70,30)
ground=new Ground(600,height,1200,20)
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(rgb(0,173,188));
 
  rubber.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  stone.display();
  hammer.display();
  ground.display();
  iron.display();
  drawSprites();
 
}



