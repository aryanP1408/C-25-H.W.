class Dustbin{
    constructor(x,y,width,height,angle){
        var options ={
            restitution: 0.5,
            friction: 1.0,
            density: 1.0,
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        Matter.World.add(world, this.body);
        this.rightSideBody = Matter.Bodies.rectangle(x,y-20,width,height,options);
        this.bottomSideBody = Matter.Bodies.rectangle(x,y,width,height,options);
        this.leftSideBody = Matter.Bodies.rectangle(x,y,width,height,options);
        Matter.World.add(world,this.leftSideBody);
        Matter.World.add(world,this.rightSideBody);
        Matter.World.add(world,this.bottomSideBody);
     
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
        rectMode(CENTER);
        rect( this.rightSideBody.position.x-35,this.rightSideBody.position.y+15,this.width-70,this.height);
        rect(this.leftSideBody.position.x+33,this.leftSideBody.position.y,this.width-70,this.height);
        rect(this.bottomSideBody.position.x,this.bottomSideBody.position.y+30,this.width,this.height-60);
        
     
     
    }

}