let spheres = [];
const numSpheres = 500; 


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
//生成numSpheres对应的500个球体的xyz坐标数值
  for (let i = 0; i < numSpheres; i++) {
    let x = random(-1200, 1000);
    let y = random(-1000, 1200);
    let z = random(-1000, 1500);
    spheres.push({ x: x, y: y, z: z });
   //spheres.push相当于把生成的500组球体的数值对应成球体的坐标数值x，y，z
  }
}

function draw() {
  background(203, 209, 212); 
 
  
  orbitControl();//轨道控制，可以用鼠标放大缩小绘制的图像
  
  //通过每个random得到的坐标数值，把颜色和光给到每一个球体
  let c = color(0, 255, 42);
  directionalLight(c, 1, -1, -1);

  //把上面spheres.push得到的500组球体的坐标数值转换成sphere
  for (let spheresData of spheres) {
    push();
    translate(spheresData.x, spheresData.y, spheresData.z);

   //让每个random得到的坐标数值所对应的球体单个旋转（因为这段是在for的限定里，在for的限定外就是让那个整个屏幕的xyz旋转）
   let angle = frameCount * 0.005;//意味着每帧旋转的角度大小
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);

    sphere();
    pop();
  }
}
