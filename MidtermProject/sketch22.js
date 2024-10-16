let cols, rows;
let scls = 20;  // 网格间距
let w = 2000;   // 画布宽度
let h = 1800;   // 画布高度
let flying = 0;
var mic;
let started = false;

let terrainVectors = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scls;
  rows = h / scls;
  getAudioContext().suspend();
  noLoop();
}

function mousePressed() {
  if (started == false) {
    mic = new p5.AudioIn();
    mic.start();
    loop();
    getAudioContext().resume();
    started = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (started == true) {
    var vol = mic.getLevel();

    // 增加灵敏度的增益值
    let sensitivity = 400; 
    var mappedVol = map(vol, 0, 1, -sensitivity, sensitivity); 

    flying -= 0.1;
    let yoff = flying;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols;
        // 使用更大的高度变化范围
        terrainVectors[index] = map(noise(xoff, yoff), 0, vol, -150 + mappedVol,50 + mappedVol);
        xoff += 0.1;
      }
      yoff += 0.1;
    }

    background(255);
    noStroke();
    fill(138, 165, 207);
    rotateY(PI / 1);
    translate(-w / 2, -h / 2 + 70);

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
