class Block {
    constructor(x,y,width,height){

        var bodyOpt={
            restitution:0
          }
          this.Visibility = 255;
          this.body = Bodies.rectangle(x,y,width,height,bodyOpt);
          this.width = width;
          this.height = height;
         
          World.add(world,this.body);

    }

    // function

    display(){
    
        if(this.body.speed <3) {
        var angle=this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility -5;
            pop();
        }
    }
    Score(){
        if(this.Visibility<0 && this.Visibility >-105){
          score++;
        }
      }
}