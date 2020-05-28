class laser{
    constructor(x, y,radius,angle) {
        var options = {
        isStatic:true
        }
        this.body = Bodies.circle(x, y,this.radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        ellipseMode(CENTER);
     ellipse( 0, 0, this.radius);
       }
}