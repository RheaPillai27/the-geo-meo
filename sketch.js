const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stone = new Stone(100,100,70,70);

    sand1 = new Sand(700,370,7,7);
    sand2 = new Sand(990,370,7,7);
    sand3 = new Sand(700,300,7,7);
    sand4 = new Sand(890,300,7,7);
    sand5 = new Sand(810,100,7,7);
    sand6 = new Sand(830,100,7,7);
    sand7 = new Sand(870,100,7,7);
    sand8 = new Sand(710,100,7,7);
    sand9 = new Sand(850,100,7,7);
    sand10 = new Sand(910,100,7,7);
    sand11 = new Sand(860,100,7,7);
    sand12 = new Sand(510,100,7,7);
    sand13 = new Sand(720,100,7,7);
    sand14 = new Sand(390,100,7,7);
    sand15 = new Sand(108,100,7,7);
    sand16 = new Sand(805,100,7,7);
    sand17 = new Sand(470,100,7,7);
    sand18 = new Sand(590,100,7,7);
    sand19= new Sand(800,100,7,7);
    sand20 = new Sand(960,100,7,7);



  ground = new Ground(600,height,1200,20);

  hammer = new Hammer(195,350,PI/2,260);
  

  rubber = new Rubber(800,370,50,50);
 

}

function draw(){
    background("skyblue");
    Engine.update(engine);
  
    
    stone.display();

    ground.display();
    
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
    sand11.display();
    sand12.display();
    sand13.display();
    sand14.display();
    sand15.display();
    sand16.display();
    sand17.display();
    sand18.display();
    sand19.display();
    sand20.display();

    hammer.display();
    

    rubber.display();
    
}