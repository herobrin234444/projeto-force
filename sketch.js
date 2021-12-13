const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, left, right, topwall,bola,bola_opcao;
var btn1, btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  btn1 =createImg("right.png");
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce)

  btn2 =createImg("up.png");
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce)

  ground = new Solo(200,390,400,20);

  right = new Solo(390,200,20,400);

  left = new Solo(10,200,20,400);

  topwall = new Solo(200,10,400,20)

  bola_opcao = {
    restitution: 0.95,
    frictionAir: 0.01
}


bola = Bodies.circle(200,100,20,bola_opcao);
World.add(world, bola);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();

  left.show();

  right.show();

  topwall.show();

  ellipseMode(RADIUS);
  ellipse(bola.position.x, bola.position.y, 20);
}

function hForce(){

  Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:0})
}

function vForce(){

  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05})
}