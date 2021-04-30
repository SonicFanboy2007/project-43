var hr;
var mn;
var sc;
var hrAngle;
var mnAngle;
var scAngle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(100);
}

function draw(){
  background(0);

  sc = second();
  mn = minute();
  hr = hour();

  scAngle=map(sc, 0, 60, 0, 360);
  mnAngle=map(mn, 0, 60, 0, 360);
  hrAngle=map(hr, 0, 12, 0, 360);

  camera.position.x=0;
  camera.position.y=0;

  background("black");

  noFill();
  strokeWeight(10);

  //Arcs
  stroke(255, 0, 0);
  arc(0, 0, 600, 600, -90, scAngle - 90);

  stroke(0, 255, 0);
  arc(0, 0, 550, 550, -90, mnAngle - 90);

  stroke(0, 0, 255);
  arc(0, 0, 500, 500, -90, hrAngle - 90);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(8);
  line(0, -200, 0, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(9);
  line(0, -150, 0, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(10);
  line(0, -90, 0, 0);
  pop();
  
  strokeWeight(20);
  stroke(255,255,255);
  point(0, 0);
  drawSprites();

  strokeWeight(1);
  stroke(255, 255, 255);
  textSize(20);
  text(hr + ':' + mn + ':' + sc, 0 - 39, 0 + 100);

  drawSprites();
}