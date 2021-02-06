class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2,
      }
      this.body = Bodies.rectangle(x, y, 70, 30, options);
      this.width = 70;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x=mouseX;
      pos.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      strokeWeight(2);
      stroke("white")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };