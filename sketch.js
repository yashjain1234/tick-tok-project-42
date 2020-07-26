var hr,min,sec;
var hAngle,mAngle,sAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 

  translate(200,200);
  rotate(-90);

  hr = hour();
  min = minute()
  sec = second();

  sAngle = map(sec,0,60,0,360);
  mAngle = map(min,0,60,0,360);
  hAngle = map(hr%12,0,12,0,360);

  //drawing second hand
  push();
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  //drawing minute hand
  push();
  rotate(mAngle);
  stroke(0,255,0);
  strokeWeight(5);
  line(0,0,75,0);
  pop();

   //drawing hour hand
   push();
   rotate(hAngle);
   stroke(0,0,255);
   strokeWeight(5);
   line(0,0,50,0);
   pop();
   strokeWeight(10);
   noFill();
   //drawing the arcs
   stroke(255,0,0);
   arc(0,0,300,300,0,sAngle);
   stroke(0,255,0);
   arc(0,0,280,280,0,mAngle);
   stroke(0,0,255);
   arc(0,0,260,260,0,hAngle);
}