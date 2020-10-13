const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base, stand1, stand2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13,
    block14, block15, block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var polygon, slingshot;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  base = new Ground(600,590,1200,25);
  stand1 = new Ground(500,480,310,20);
  stand2 = new Ground(900,250,250,20);

  //level one
  block1 = new Block(400,400,35,50);
  block2 = new Block(435,400,35,50);
  block3 = new Block(470,400,35,50);
  block4 = new Block(505,400,35,50);
  block5 = new Block(540,400,35,50);
  block6 = new Block(575,400,35,50);
  block7 = new Block(610,400,35,50);

  //level two 
  block8 = new Block(435,330,35,50);
  block9 = new Block(470,330,35,50);
  block10 = new Block(505,330,35,50);
  block11 = new Block(540,330,35,50);
  block12 = new Block(575,330,35,50);

  //level three
  block13 = new Block(470,260,35,50);
  block14 = new Block(505,260,35,50);
  block15 = new Block(540,260,35,50);

  //level top
  block16 = new Block(505,190,35,50);

  //level one
  block17 = new Block(830,160,35,50);
  block18 = new Block(865,160,35,50);
  block19 = new Block(900,160,35,50);
  block20 = new Block(935,160,35,50);
  block21 = new Block(970,160,35,50);

  //level two
  block22 = new Block(865,90,35,50);
  block23 = new Block(900,90,35,50);
  block24 = new Block(935,90,35,50);

  //level top
  block25 = new Block(900,20,35,50);

  polygon = new Polygon(150,190);

  slingshot = new SlingShot(polygon.body, {x: 140,y: 190});
}

function draw() {
  background(rgb(55, 43, 43));  
  Engine.update(engine);

  textSize(20);
  fill("white");
  text("Drag the Polygon to Destroy the Blocks",350,50);
  text("Press Space to get a second Chance to Play!!",700,500);

  base.display();
  stand1.display();
  stand2.display();

  fill(rgb(135, 206, 234));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(rgb(254, 191, 202));
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(63, 224, 208));
  block13.display();
  block14.display();
  block15.display();

  fill(rgb(127, 127, 127));
  block16.display();

  fill(rgb(135, 206, 234));
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(rgb(63, 224, 208));
  block22.display();
  block23.display();
  block24.display();

  fill(rgb(254, 191, 202));
  block25.display();

  polygon.display();

  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}

