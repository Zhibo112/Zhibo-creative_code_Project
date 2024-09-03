function setup(){
    createCanvas(windowWidth,windowHeight, WEBGL)
    
 
}

function draw(){
    background(203, 209, 212);
    let angle = frameCount * 0.01;
  rotateZ(angle);
    orbitControl();
    noStroke()
    let c = color(0, 255, 42);
  directionalLight(c, 1, -1, -1);
    
    sphere();
}





