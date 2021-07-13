const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1;
var base2;
var bridge1;
var stones = [];
var jointPoint;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base1 = new Base(100,800,300,500);
  base2 = new Base(1800,800,300,500);

  bridge1 = new Bridge(15,{x:width/2-1200,y:height/2+100});
  jointPoint = new Base(width-250,height/2+100,40,20);
  Matter.Composite.add(bridge1.body, jointPoint);
  jointLink = new Link(bridge1, jointPoint);

  for(var i = 0; i <= 8; i++){
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  base1.display();
  base2.display();
  bridge1.show();
  jointPoint.display();
  for(var stone of stones){
    stone.show();
  }
}
