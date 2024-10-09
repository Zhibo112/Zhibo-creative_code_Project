let cols, rows;
let scls = 20;
let w = 1200;
let h = 900;
let flying = 0;
var mic
let started = false;

let terrainVectors = [];

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  cols = w / scls;
  rows = h / scls;
  getAudioContext().suspend();
  
  // let yoff = 0;
  // for (let y = 0; y < rows; y++) {
  //   let xoff = 0;
  //   for (let x = 0; x < cols; x++) {
  //     //terrainVectors.push(noise(x, y));
  //     let index = x + y * cols;
  //     terrainVectors[index] = map(noise(xoff, yoff), 0, 1, -50, 100);
  //     xoff += 0.01;
  //   }
  //   yoff += 0.01;
  // }
  noLoop();
}

function mousePressed() {
  if(started == false) {
    mic= new p5.AudioIn
    mic.start()
    loop();
    getAudioContext().resume()
    started = true;
  }
}

function draw() {

  if(started == true) {

  

  var vol= mic.getLevel()
  flying -= 0.1;
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      //terrainVectors.push(noise(x,y))
      let index = x + y * cols;
      terrainVectors[index] = map(noise(xoff, yoff), 0, vol, -150, 550)
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  background(255);
noStroke()
  fill(0)
 //stroke(0)

  //translate(width/2,height/2)
  rotateX(PI / 1);
  translate(-w / 2, -h / 2+70);

  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      vertex(x * scls, y * scls, terrainVectors[index]);
      vertex(x * scls, (y + 1) * scls, terrainVectors[index]);
    }
    endShape();
  }
}
}
