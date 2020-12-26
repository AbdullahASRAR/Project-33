class SlingShot{
    constructor(body1,point2){
      var option={
       bodyA:body1,
       pointB:point2,
       stiffness:0.09,
       length:100
      }
      this.slingShot =Constraint.create(option)
       World.add(world,this.slingShot)
       this.pointB=point2
    }
   
    fly(){
      this.slingShot.bodyA = null;
     }
     attach(body){
       this.slingShot.bodyA=body
   }
   
    display(){

     if(this.slingShot.bodyA){
       
      var pointA=this.slingShot.bodyA.position;
      var pointB=this.pointB;
      line (pointA.x,pointA.y,pointB.x,pointB.y)
      
     }
    }
   
   
}