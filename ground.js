class Ground{
    constructor(x,y,w,h){
    
       
    var options={isStatic:true}
    this.width=w;
    this.height=h;
    
    this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
        pop()
    }
    
    }
