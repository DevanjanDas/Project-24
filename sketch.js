const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var paper_object;
var ground;

function setup() {
	createCanvas(1200,500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(810,450,100,10);
  paper_object = new PaperObject(300,160,10); 
  ground = new Ground(600,490,1200,30);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Render.run(render);
}
function draw() {
  rectMode(CENTER);
  background(0);
    Engine.update(engine);
    console.log(paper_object.body.position.x);
    console.log(paper_object.body.position.y);
    console.log(paper_object.body.angle);
  
  paper_object.display();
  dustbin.display();
  ground.display();
}

function keyPressed() {

if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper_object.body,paper_object.body.position,{x:10,y:-20});

}

}





