const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,600,50,50);
    pig1= new Pig(700,600)
    box2 = new Box(800,600,50,50);
    log1 = new Log(700,550,270,PI/2)
    

    box3 = new Box(600,500,50,50);
    pig2= new Pig(700,500)
    box4 = new Box(800,500,50,50);
    log2 = new Log(700,450,270,PI/2)

    box5 = new Box (700,400,50,50)
    
    log3 = new Log(650,400,90,PI/7)
    log4= new Log(750,400,90,-PI/7)
    bird1= new Bird(100,100)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();

}