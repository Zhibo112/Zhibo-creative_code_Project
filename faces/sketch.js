let walker;


function setup() {
  createCanvas(windowWidth,windowHeight);
  walker= new Walker();
 background(0);
}

function draw() {
  walker.step();
  walker.show();

   
}


class Walker {
 
  //propertie
 constructor(){
   this.x=width/2
   this.y=height/2
 }

 show(){
   
   text('Here', this.x, this.y)
   stroke(0, 204, 71);
   text('There', random(4000), random(4000))
   text('Everywhere', random(4000), random(4000))
   textSize(32);
  
   

 }
  
  //method
  step(){
     const place = floor(random(4));
    if (place == 0) {
      this.x++;
    } else if (place == 1) {
      this.x--
    } else if (place == 2) {
      this.y++;
    } else {
      this.y--;
    }
  }



}