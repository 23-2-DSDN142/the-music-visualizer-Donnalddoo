let bg = '#ED4D37'
let c1 = color(0);
let c2 = color(255);
// let eyeCol = lerpColor(c1,c2,0.5);
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(bg);
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  textSize(24);
  noStroke();
  fill(30,20,20)
  let eyex = 0
  let eyey = 0
  
  push();
  pop();
  // HORIZON
    rect(width/2,height/7*6.5,width,height/7);
  // HORIZON;


  // CLOUDS BACKGROUND
    rect(width/2,65,width,135);
    fill(50,20,20)
    push();
      scale(0.9)
      cloud3(-1,1370,115);
    pop();
    push();
      scale(1.3)
      cloud3(1,50,70);
    pop();
    push();
      scale(1.3)
      cloud3(-1,660,100);
    pop();
    rect(width/2,195,width,115);
    fill(70,20,20)
    push();
      scale(1.3)
      cloud1(1,620,95);
    pop();
    push();
      scale(1.2)
      cloud2(-1,560,150);
    pop();
    rect(550,195,width,115);
    fill(90,20,20)
    push();
      scale(0.8)
      cloud3(1,0,300);
    pop();
    push();
      cloud2(-1,1300,260);
    pop();
    rect(12,285,24,50);
    rect(1160,315,260,60);
    fill(110,20,20)
    push();
      scale(0.8);
      cloud2(-1,870,350);
    pop();
    push();
      scale(0.8)
      cloud3(-1,1300,380);
    pop();
    fill(150,20,20)
    push();
      scale(1)
      cloud1(1,10,330);
    pop();
    push();
      scale(1.)
      cloud1(-1,1260,360);
    pop();

  // CLOUDS BACKGROUND;


  // EYE  
    push();
      translate(eyex,eyey);
      eye();

      push();
        fill(110,20,20)
        scale(0.4);
        cloud3(-1,1640,640); // CLOUD INFRONT OF EYE BUT BEHIND LASER
      pop();

    

      // LASER
        let laserWidth = random(5,15)
        stroke(random(100,255),0,random(150,255));
        laser(0, 400, laserWidth);
        stroke(255);
        laser(0, 400, laserWidth/3);
      // LASER;
    pop();
  // EYE;

  // CLOUDS FOREGROUND 

  push();
  fill(130,20,20)
  scale(0.7);
  cloud1(1,440,430);
  fill(160,20,20)
  scale(0.7);
  cloud2(1,1100,660);
  pop();

  // CLOUDS FOREGROUND;
}
function eye(){
  push();
    fill(15);
    scale(1);
    translate(width/2,160);

    beginShape(); //EYELIDS
      vertex(-250,0);
      bezierVertex(-150,0,-100,45,-80,65);
      bezierVertex(-40,105,40,105,80,65);
      bezierVertex(100,45,150,0,250,0);
      bezierVertex(150,0,100,-45,80,-65);
      bezierVertex(40,-105,-40,-105,-80,-65);
      bezierVertex(-100,-45,-150,0,-250,0);
    endShape(); 

    fill(255);
    ellipse(0, 5, 190, 160); // SCLERA

    fill(70,30,30);
    circle(0,0,130); // IRIS

    fill(20);
    circle(0,13,40,); // PUPIL
  pop();

}
function cloud1(orient,cloudx,cloudy) {
  push();
    translate(cloudx,cloudy);
    circle(0,0,50);
    rect(orient*175,10,350,30);
    circle(orient*350,10,30);
    circle(orient*60,-65,130);
    circle(orient*145,-75,50);
    circle(orient*220,-15,50);
    beginShape();
      vertex(orient*239,-31)
      bezierVertex(orient*260,-5,orient*300,-5,orient*350,-5);
      vertex(0,-5)
      vertex(orient*90,-70)
    endShape();
    push();
      translate(orient*180,-40);
      rotate(orient*20);
      ellipse(0,0,60,85);
    pop();
  pop();
}

function cloud2(orient,cloudx,cloudy) {
  push();
    translate(cloudx,cloudy);
    circle(0,10,30);
    rect(orient*300,10,600,30);
    circle(orient*600,10,30);
    circle(orient*470,-115,140);
    circle(orient*105,-85,90);
    circle(orient*320,-70,80);
    circle(orient*220,-40,70);
    circle(orient*540,-60,70);
    circle(orient*580,-20,60);
    circle(orient*615,-15,40);
    circle(orient*20,-10,45);
    circle(orient*60,-25,55);
    circle(orient*65,-60,35);
    circle(orient*185,-80,55);
    circle(orient*155,-80,35);
    circle(orient*270,-35,50);
    circle(orient*400,-90,40);
    circle(orient*365,-95,50);
    beginShape();
      vertex(orient*20,0);
      vertex(orient*120,-95);
      vertex(orient*270,-35);
      vertex(orient*475,-130);
      vertex(orient*580,0);
    endShape();
  pop();
}

function cloud3(orient,cloudx,cloudy) {
  push();
    translate(cloudx,cloudy);
    circle(0,10,30);
    rect(orient*140,10,280,30);
    circle(orient*280,-10,70);
    circle(orient*10,-15,35);
    ellipse(orient*45,-30,65,55);
    circle(orient*85,-50,45);
    circle(orient*150,-80,115);
    circle(orient*240,-75,95);
    beginShape();
      vertex(0,0);
      vertex(orient*180,-95);
      vertex(orient*280,0);
    endShape();
  pop();
}
function laser(laserx,lasery,weight){ 
  push();
    translate(width/2,160);
    let oldx = 0;
    let oldy = weight/2+10;
    for (let i = 1; i <= 20; i++) {
      let newx = lerp(0, laserx, i / 20);
      let newy = lerp(weight/2+10, lasery, i / 20);
      push();
      strokeWeight(lerp(weight, 2*weight, i / 20));
      line(oldx, oldy, newx, newy);
      pop();
      oldx = newx;
      oldy = newy;
    }
  pop();
}
