function setup(){
    createCanvas(windowWidth,windowHeight, WEBGL)
    
 
}

function draw(){
    background(203, 209, 212);
    let angle = frameCount * 0.01;
  rotateY(angle);
    orbitControl();
    sphere();
}





