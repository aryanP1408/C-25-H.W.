// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var engine,world;   
var img;               

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
function preload(){
    img = loadImage
}

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
     createCanvas(400,400);
    engine = Matter.Engine.create();
    world =engine.world;
  
    paperBall = new PaperBall(200,200);
    dustbin = new Dustbin(300,350,80,70);
    ground = new Ground(200,390,800,20);


   

    
}

function draw() {
    background(100);
    Matter.Engine.run(engine);
    paperBall.display();
    dustbin.display();
    ground.display();
// Remember to update the Matter Engine and set the background.





}


function keyReleased() {
  
}