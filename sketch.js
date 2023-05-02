
let myModel;

function preload() {
  myModel = loadModel(src='src/8bit.stl',true);

}

function setup() {
  createCanvas(900, 700, WEBGL);
}

function draw() {
  background(200);
  rotateY(frameCount * 0.005)
  normalMaterial();
  scale(3);
  rotateZ(160);
  rotateX(-14);
  rotateY(-0.23);
  model(myModel);
}
/* teste*/