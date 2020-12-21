
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;

var ground;
var boy,boyi;
var stone;
var sling;
var tree;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
function preload()
{
boyi=loadImage("i/boy.png")	
stone_img=loadImage("i/stone.png")	
}

function setup() {
	createCanvas(1000, 500);

	boy=createSprite(150,415,50,50)
	boy.addImage(boyi)
	boy.scale=0.1
	

	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
   
    
	Engine.run(engine);
  
	ground=new Ground(500,480,1000,10)
	
	tree=new Tree(700,280)
	m1=new Mango(800,200)
	m2=new Mango(700,150)
	m3=new Mango(700,250)
    m4=new Mango(800,250)
	m5=new Mango(650,260)
	m6=new Mango(660,200)
	m7=new Mango(750,200)
	m8=new Mango(750,270)
	m9=new Mango(600,200)
	m10=new Mango(550,250)
	stone=Bodies.circle(100,350,20)
    World.add(world,stone);
	sling= new Slingshot(this.stone,{x:100,y:350})


}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  ground.display();
 
  tree.display()
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  detectcollision(m1,stone);
  detectcollision(m2,stone);
  detectcollision(m3,stone);
  detectcollision(m4,stone);
  detectcollision(m5,stone);
  detectcollision(m6,stone);
  detectcollision(m7,stone);
  detectcollision(m8,stone);
  detectcollision(m9,stone);
  detectcollision(m10,stone);
  imageMode(CENTER)
  image(stone_img,stone.position.x,stone.position.y,40,40)
  sling.display();
  textSize(30); 
    fill("black"); 
    text("Press Space for Second Chance",100,50)
   drawSprites();
}


    function mouseDragged(){
	Matter.Body.setPosition(this.stone,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
	sling.fly()
	
	}
	

		
	function keyPressed(){
        if(keyCode===32){
        
        sling.attached(this.stone);
        
        
        }
        
        
        }

function detectcollision(lmango,lstone){
console.log(lmango)	
mangoposition=lmango.mango.position;
stonePosition=lstone.mango.position;
var distance=dist(stonePostion.x,stonePostion.y,mangoPosition.x,mangoPosition.y)
if(distance<=lmango.r+lstone.r){

	Matter.Body.setStatic( lmango.body,false);
}


}
