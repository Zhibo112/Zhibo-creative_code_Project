let f;
function preload(){
    
}

function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  //background(220);
  
  let f= new Face;
  f.display();
}
//blueprint for a face object

class Face {
 
  //properties
 constructor(){
   this.size = random(50,70);
   this.x =random(width);
   this.y = random(height);
   this.skinColor = color(random(256),random(256),random(256));
   this.eyeDistance = 10;
   this.eyeHeight = 10;
   this.eyeSize = 40;
   this.eyeColor= random(0,256);
 }
  
  //method
  display(){
    fill(this.skinColor)
    ellipse(this.x, this.y, this.size);
    //left eye
    
    fill(this.eyeColor);
    
    text("👽",this.x-this.eyeDistance,this.y-this.eyeHeight, this.size-this.eyeSize);
    //right eye
    fill(this.eyeColor+50)
    text("👽",this.x+this.eyeDistance,this.y-this.eyeHeight, this.size-this.eyeSize);
    
    
  }
  




}