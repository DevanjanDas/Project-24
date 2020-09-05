class Dustbin{
 constructor(x,y,width,height) {
    var options = {
        isStatic:true
    }
    this.leftbody = Bodies.rectangle(x-90, y-30, width-90, height+90, options);
    this.width = width-90;
    this.height = height+90;
    
    this.rightbody= Bodies.rectangle(x+100,y-30,width-90,height+90,options);


    this.bottombody = Bodies.rectangle(x+5,y+20,width+80,height,options);
    this.width1 = width+80;
    this.height1 = height;

    //810,400,100,10
    World.add(world,this.rightbody);
    World.add(world,this.bottombody);
    World.add(world,this.leftbody);
 }
display() {

    var pos =this.leftbody.position;
    var angle = this.leftbody.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
  

    var pos =this.rightbody.position;
    var angle = this.rightbody.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
  
    var pos =this.bottombody.position;
    var angle = this.bottombody.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.width1, this.height1);
    pop();
  
}


}