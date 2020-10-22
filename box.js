class Block{
    constructor(x, y, width, height,color) {
        var options = {
           
            restitution :0,
            friction :0,
            //isStatic:true
           
        }
        this.visibilty=225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color= color;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill (this.color)
        rect(0,0,this.width, this.height);
        pop();
      }else{

        World.remove(world, this.body);
        push();
           this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
        
    pop(); }


      }}
  