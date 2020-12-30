class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        //this.image = loadImage("images/Walking Frame/walking_1.png");
        
        
        this.body = Bodies.circle(x,y,80,options);
        this.r = 80;
        World.add(world, this.body)
    }

    display(){
        push();
        var pos = this.body.position;
        fill("black");
        ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.r,this.r);
       pop();
    }
}