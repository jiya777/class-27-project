const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint=Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var roof1,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new bob(600,400,30);
bob2=new bob(540,400,30);
bob3=new bob(480,400,30);
bob4=new bob(420,400,30);
bob5=new bob(360,400,30);
roof1=new roof(500,200,400,20);
rope1=new rope(bob1.body,roof1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
rope1.display()
  bob5.display()
 roof1.display()


  drawSprites();
 
}



