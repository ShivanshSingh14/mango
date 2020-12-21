class Tree {
    constructor(x, y, width, height) {
        var treeoptions = {
            ' isStatic':true,
           

            
        }
        this.tree = Bodies.rectangle(x, y, width, height, treeoptions);
        this.width = width;
        this.height = height;
        this.image=loadImage("i/tree.png")
        Matter.Body.setStatic( this.tree,true)    
        World.add(world, this.tree);
        
      }
      display(){
        var position =this.tree.position;
       
        imageMode(CENTER);
        image(this.image,position.x,position.y,400, 400);
        
      }

}