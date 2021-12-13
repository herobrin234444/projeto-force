class Solo{

    constructor(x,y,w,h){
    var opcao = {
        isStatic: true
    }
   this.body = Bodies.rectangle(x,y,w,h,opcao);
    this.w = w;
    this.h = h;
    World.add(world,this.body);
   

    }


    show() {
        push();
        rectMode(CENTER);
        fill(127);
        stroke(255);
    rect(this.body.position.x,this.body.position.y,this.w,this.h);
    pop();
    }
}