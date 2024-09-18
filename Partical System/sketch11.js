let particles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // create all of our particles and store them in the particles[] array
  for(let i = 0; i < 100; i++) {
    
    let p = new Particle();
    particles.push(p);
    
  }
}

function draw() {
  //background(220);
  
  // loop through all the Particles in the particles[], update and show them
  for(let i = 0; i < particles.length; i++) {
    
    let currentParticle = particles[i];
    currentParticle.update(); // update() is a lot like step() from the RandomWalker class
    currentParticle.show();
    
  }
}

class Particle {
  
  constructor() {
    this.position = createVector(random(width), random(height))
    this.velocity = createVector(random(-1, 1000), random(-1, 1000))
    this.acceleration = createVector(random(-60, 0.1), random(-0, 0.1))
    this.age = random(100, 200);
  }
  
  // update() is where all the math happens
  update() {
  this.velocity.add(this.acceleration)
    this.checkWalls()
    this.position.add(this.velocity)
    this.age++;
    
  }
  
  checkWalls() {
    // check top wall
    if(this.position.y < 0) {
      this.velocity.y *= -1; // reverse the y direction (if it's negative, it becomes positive, and vice versa)
    }
    
    // check bottom wall
    if(this.position.y > height) {
      this.velocity.y *= -1;
    }
    
    // check left wall
    if(this.position.x < 0) {
      this.velocity.x *= -1;
    }
    
    // check right wall
    if(this.position.x > width) {
      this.velocity.x *= -1;
      {
    
          if(mouseX>windowWidth/2){
        mouseX=mouseX++
          }
        if(mouseY>windowHeight/2){
        mouseY=mouseY++
        }
          if(mouseY>windowHeight/2){
        this.age=-this.age
        
          
        }
        
        
      }
    }
  }
  
  show() {
    noFill()
    stroke(0,this.age,this.age)
    ellipse(this.position.y,this.position.x, mouseY, mouseX);

   
  }
}