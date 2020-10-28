const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground,plinko1,particle1;
var particles = [];
var plinkos = [];
var divisions = [];





function preload() {

}
function setup() {
  
  createCanvas(480,800);


  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

  for(var i = 0; i<=480; i = i + 80){
    divisions.push(new Division(i,650,10,300))

  }

  for(var i = 35; i<=480; i = i + 50){
    plinkos.push(new Plinko(i,75))

  }
  
  for(var i = 15; i<=470; i = i + 50){
    plinkos.push(new Plinko(i,175))

  }

  for(var i = 35; i<=480; i = i + 50){
    plinkos.push(new Plinko(i,275))

  }
  
  for(var i = 15; i<=470; i = i + 50){
    plinkos.push(new Plinko(i,375))

  }

 

}

function draw() {

  background("black")
  Engine.update(engine);

  ground.display();

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(50,430),10));

  }

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();

  }

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();

  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();

  }

  drawSprites();



}


