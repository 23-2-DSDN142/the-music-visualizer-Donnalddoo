let bg = '#ED4D37'
let n = 0
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
  let eyex = map(other,0,100,-10,10)
  let eyey = map(bass,0,100,-20,30)
  n = map(vocal,0,100,-10,10)
  // HORIZON
    rect(width/2,height/7*6.5,width,height/7);
    for(let i = 1; i<11; i++){
     square(width/20*2*i-width/20,height-width/20+n*i,width/10)
    }
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
      push();
      translate(eyex,eyey);
        eye();
      pop();
      push();
        fill(110,20,20)
        scale(0.4);
          cloud3(-1,1640,640); // CLOUD INFRONT OF EYE BUT BEHIND LASER
      pop();
      translate(eyex,eyey);
      // LASER
        for (let i = 11.4; i<=35.5; i+=5.95){
          if (song.currentTime()>=i) { // STARTS AT 11.5, REPEATS EVERY 6 SECONDS
            if (song.currentTime()<=i+0.4) {

            push();
            let laserWidth = random(5,15)
            let laserX = map(song.currentTime(),i,i+0.4,-550,550)
            let laserY = 525
            stroke(random(100,255),0,random(150,255));
              laser(laserX, laserY, laserWidth,laserWidth);
            stroke(255);
              laser(laserX, laserY, laserWidth/3,laserWidth/1.5);
              pop();
            }
          }
        }
        for (let i = 59; i<=83; i+=5.95){
          if (song.currentTime()>=i) { // STARTS AT 11.5, REPEATS EVERY 6 SECONDS
            if (song.currentTime()<=i+0.4) {

            push();
            let laserWidth = random(5,15)
            let laserX = map(song.currentTime(),i,i+0.4,-550,550)
            let laserY = 525
            stroke(random(100,255),0,random(150,255));
              laser(laserX, laserY, laserWidth,laserWidth);
            stroke(255);
              laser(laserX, laserY, laserWidth/3,laserWidth/1.5);
              pop();
            }
          }
        }
        for (let i = 106.9; i<=200.5; i+=5.95){
          if (song.currentTime()>=i) { // STARTS AT 11.5, REPEATS EVERY 6 SECONDS
            if (song.currentTime()<=i+0.4) {

            push();
            let laserWidth = random(5,15)
            let laserX = map(song.currentTime(),i,i+0.4,-550,550)
            let laserY = 525
            stroke(random(100,255),0,random(150,255));
              laser(laserX, laserY, laserWidth,laserWidth);
            stroke(255);
              laser(laserX, laserY, laserWidth/3,laserWidth/1.5);
              pop();
            }
          }
        }
        if (song.currentTime()>=47.1) { // STARTS AT 11.5, REPEATS EVERY 6 SECONDS
          if (song.currentTime()<=47.5) {

          push();
          let laserWidth = random(5,15)
          let laserX = map(song.currentTime(),i,i+0.4,-550,550)
          let laserY = 525
          stroke(random(100,255),0,random(150,255));
            laser(laserX, laserY, laserWidth,laserWidth);
          stroke(255);
            laser(laserX, laserY, laserWidth/3,laserWidth/1.5);
            pop();
          }
        }
        if (song.currentTime()>=94.9) { // STARTS AT 11.5, REPEATS EVERY 6 SECONDS
          if (song.currentTime()<+95.3) {

          push();
          let laserWidth = random(5,15)
          let laserX = map(song.currentTime(),i,i+0.4,-550,550)
          let laserY = 525
          stroke(random(100,255),0,random(150,255));
            laser(laserX, laserY, laserWidth,laserWidth);
          stroke(255);
            laser(laserX, laserY, laserWidth/3,laserWidth/1.5);
            pop();
          }
        }
      // LASER;
    pop();
  // EYE;

  // CLOUDS FOREGROUND 
    push();
      fill(130,20,20);
      scale(0.7);
        cloud1(1,440,430);
      fill(160,20,20)
      scale(0.7);
        cloud2(1,1100,660);
    pop();
  // CLOUDS FOREGROUND;

  // BROKEN GROUND

  // BROKEN GROUND;
}
function eye(){
  push();
    fill(50,15,15);
    scale(1);
    translate(width/2,160);
      beginShape(); //EYELIDS
        vertex(140,-25);
        vertex(0,-50)
        vertex(-140,-25);
        vertex(-235,0);
        bezierVertex(-150,0,-100,45,-80,65);
        bezierVertex(-40,105,40,105,80,65);
        bezierVertex(100,45,150,0,235,0);
      endShape(); 
    fill(40,5,5);
      push();
        scale(1.2)
          beginShape();
            vertex(-140,-5);
            vertex(0,-40)
            vertex(140,-5);
            vertex(190,0);
            vertex(210,-15);
            vertex(190,-25);
            bezierVertex(150,-25,100,-45,80,-65);
            bezierVertex(40,-105,-40,-105,-80,-65);
            bezierVertex(-100,-45,-150,-25,-190,-25);
            vertex(-210,-15);
            vertex(-190,0);
          endShape(); 
        stroke(50,15,15);
        strokeWeight(15);
          arc(0,-8,190,155,220,320); // EYELID OVER SCLERA
      pop();
    fill(205,60,60);
      ellipse(0, -10, 190, 160); // SCLERA
      for(let i = 0.0125; i<=1; i+=0.0125){
        push();
          translate(0,-10)
          scale(1-i);
          fill(255,255*i)
          ellipse(0, 0, 190, 160);
        pop();
      }

      push();
        stroke(40,5,5);
        strokeWeight(25);
        noFill();
          arc(0,-6,225,145,198,342); // EYELID OVER SCLERA
      pop();
    fill(150,30,110);
      circle(0,0,130); // IRIS
      for(let f = 1; f<=360; f+=10){
        for(let i = 0.0125; i<=1; i+=0.0125){
          push();
            scale(1-i);
            rotate(f);
            strokeWeight(10*i);
            stroke(120,30,110,255*i)
              line(0,0,0,65);
            rotate(5)
            stroke(130,30,120)
              line(0,0,0,55);
          pop();
        }
      }
    
    fill(20);
      circle(0,0,40,); // PUPIL
    stroke(25,5,5);
    strokeWeight(6);
    noFill();
      arc(0,-15,230,200,210,285); // BIG WRINKLES
      arc(0,-15,230,200,300,330);
      arc(0,-5,230,200,30,140);
      arc(205,105,230,200,230,250);
      arc(205,-130,230,200,95,135);
      arc(-205,105,230,200,290,320);
      arc(-205,-130,230,200,50,70);
      arc(190,-15,120,30,340,50);
      arc(-190,-15,120,30,130,200);

    strokeWeight(3);
      arc(0,-25,280,240,245,330); // SMALL WRINKLES
      arc(0,-25,280,240,210,225);
      arc(0,-20,280,240,35,45);
      arc(0,-19,280,240,55,90); 
      arc(235,135,300,260,225,270);
      arc(-235,135,300,260,270,325);
      arc(235,-165,300,260,90,125);
      arc(-235,-165,300,260,55,90);
      arc(220,-18,120,40,330,10);
      arc(-220,-18,120,40,170,210);
  pop();
}

function cloud1(orient,cloudx,cloudy) {
  push();
    translate(cloudx,cloudy+n);
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
    translate(cloudx+n,cloudy);
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
    translate(cloudx-n,cloudy);
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
function laser(laserx,lasery,weight,spread){ 
  push();
    translate(width/2,150);
    let oldx = 0;
    let oldy = weight/2+10;
    for (let i = 1; i <= 20; i++) {
      let newx = lerp(0, laserx, i / 20);
      let newy = lerp(weight/2+10, lasery, i / 20);
      push();
        strokeWeight(lerp(weight, 5*weight, i / 20));
          line(oldx, oldy, newx, newy);
          point(random(newx-weight,newx+weight),random(newy-weight,newy+weight))
          point(random(laserx-10*spread,laserx+10*spread),random(lasery-spread,lasery+spread))
          point(random(laserx-5*spread,laserx+5*spread),random(lasery-3*spread,lasery-spread))
          point(random(laserx-2*spread,laserx+2*spread),random(lasery-6*spread,lasery-2*spread))
      pop();
      oldx = newx;
      oldy = newy;
    }
  pop();
}
