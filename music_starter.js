
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(237,77,55)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  textSize(24);
  noStroke();
  fill(255)
  let eyex = 100
  let eyey = 50
  let irisx = eyex + 5
  let irisy = eyey + 18

  // EYE  
  push();
  fill(0);
  scale(0.7);
  translate(200,200);
  rotate(-25);

  beginShape(); //EYELIDS
  vertex(eyex-250,eyey);
  bezierVertex(eyex-150,eyey,eyex-100,eyey+45,eyex-80,eyey+65);
  bezierVertex(eyex-40,eyey+105,eyex+40,eyey+105,eyex+80,eyey+65);
  bezierVertex(eyex+100,eyey+45,eyex+150,eyey,eyex+250,eyey);
  bezierVertex(eyex+150,eyey,eyex+100,eyey-45,eyex+80,eyey-65);
  bezierVertex(eyex+40,eyey-105,eyex-40,eyey-105,eyex-80,eyey-65);
  bezierVertex(eyex-100,eyey-45,eyex-150,eyey,eyex-250,eyey);
  endShape(); 

  fill(255);
  ellipse(eyex, eyey+5, 190, 160); // SCLERA

  fill(0);
  circle(irisx,irisy,130); // IRIS

  fill(237,77,55);
  circle(irisx+4,irisy+13,40,); // PUPIL
  pop();
  // EYE;

  // CLOUDS
  let centerSize =
  arc(600,290,90,90,135,45,OPEN);
  fill(100)
  arc(670,295,70,70,135,45,OPEN);
  fill(0)
  arc(550,300,50,50,135,45,OPEN);
  // CLOUDS;
}
