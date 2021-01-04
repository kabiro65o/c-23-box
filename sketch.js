const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
   ground = new Ground(200,390,400,40);
   

  box1 = new Box(200,100,50,50);
 // console.log(box1);

 box2=new Box(220,50,50,100);

}

function draw(){
    background(0);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
}