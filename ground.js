class Ground {
    constructor(x, y, width, height) {
        var groundoptions = {
            ' isStatic':true
            
        }
        this.ground = Bodies.rectangle(x, y, width, height, groundoptions);
        this.width = width;
        this.height = height;
        Matter.Body.setStatic( this.ground,true)    
        World.add(world, this.ground);
      }
      display(){
        var position =this.ground.position;
       
      rectMode(CENTER);
       fill("silver")

        rect(position.x,position.y, this.width, this.height);
        
      }

}