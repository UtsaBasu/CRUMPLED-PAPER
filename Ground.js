class Ground {
    constructor(x,y,width,height)   {
        var options = {
           isStatic:true 
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage('base.png');
    World.add(world,this.body);
}

    display()   {
        push();
        var pos1 = this.body.position;
        translate(pos1.x,pos1.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}