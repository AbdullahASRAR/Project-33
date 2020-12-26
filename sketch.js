const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var ground,stoneImage,block;
var score=0;
var backgroundImg,bg;

function setup() {
    createCanvas(1200,600);
	engine = Engine.create();
    world = engine.world;
    ground1=new Ground(600,580,1200,10);
    ground2=new Ground(900,300,200,10);
    ground3=new Ground(600,400,250,10);
    stone=new Stone(300,290,25);
    sling=new SlingShot(stone.body,{x:300,y:240});
    block1=new Block(550,380,20,30);
    block2=new Block(570,380,20,30);
    block3=new Block(590,380,20,30);
    block4=new Block(600,380,20,30);
    block5=new Block(610,380,20,30);
    block6=new Block(630,380,20,30);
    block7=new Block(650,380,20,30);
    block8=new Block(870,280,20,30);
    block9=new Block(890,280,20,30);
    block10=new Block(900,280,20,30);
    block11=new Block(910,280,20,30);
    block12=new Block(930,280,20,30);
    block13=new Block(570,360,20,30);
    block14=new Block(590,360,20,30);
    block15=new Block(600,360,20,30);
    block16=new Block(610,360,20,30);
    block17=new Block(630,360,20,30);
    block18=new Block(890,260,20,30);
    block19=new Block(900,260,20,30);
    block20=new Block(910,260,20,30);
    block21=new Block(590,340,20,30);
    block22=new Block(600,340,20,30);
    block23=new Block(610,340,20,30);
    block24=new Block(900,240,20,30);
    block25=new Block(600,320,20,30);
     
    getBackgroundImage();
    Engine.run(engine);
}

function draw() {
    if(backgroundImg){
        background(backgroundImg);
    }
    text("score:"+score,width-100,50)
    ground1.display();
    ground2.display();
    ground3.display();
    stone.display();
    sling.display();
    //strokeWeight(2);
    stroke(15);
    fill("skyBlue");
    block1.display();
    block1.Score();
    block2.display();
    block2.Score();
    block3.display();
    block3.Score();
    block4.display();
    block4.Score();
    block5.display();
    block5.Score();
    block6.display();
    block6.Score();
    block7.display();
    block7.Score();
    block8.display();
    block8.Score();
    block9.display();
    block9.Score();
    block10.display();
    block10.Score();
    block11.display();
    block11.Score();
    block12.display();
    block12.Score();
    fill("blue");
    block13.display();
    block13.Score();
    block14.display();
    block14.Score();
    block15.display();
    block15.Score();
    block16.display();
    block16.Score();
    block17.display();
    block17.Score();
    block18.display();
    block18.Score();
    block19.display();
    block19.Score();
    block20.display();
    block20.Score();
    fill("pink");
    block21.display();
    block21.Score();
    block22.display();
    block22.Score();
    block23.display();
    block23.Score();
    block24.display();
    block24.Score();
    fill("grey");
    block25.display();
    block25.Score();
                
}
async function getBackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var response2=await response.json();
    var dateTime=response2.datetime
    var hour=dateTime.slice(11,13)
    if(hour>=06&&hour<=19){
     bg="bg.png"
    }
    else{
        bg="bg2.jpg"
    }
    backgroundImg=loadImage(bg)
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if (keyCode===32){
       sling.attach(stone.body)
    }
    }
