class Mango {
    constructor(x, y, width, height) {
        var mangooptions = {
          'isStatic':true,
          'restitution':0.8,
          'friction':1.0,
         

            
        }
        this.width = width;
        this.height = height;
        this.x=x
        this.y=y
        this.body = Bodies.rectangle(this.x,this.y, this.width, this.height, mangooptions);
        this.image=loadImage("i/mango.png")
       // Matter.Body.setStatic( this.mango,true)    
        World.add(world, this.body);
        
      }
      display(){
        var position =this.body.position;
       
        imageMode(CENTER);
        image(this.image,position.x,position.y, 50, 50);
        
      }

}