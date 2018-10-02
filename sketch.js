function preload(){
  // put preload code here
}


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(20);
  frameRate(40);

}

function draw() {

  //variabili
  var angle = sin(frameCount) * 120;
  var angle2 = sin(frameCount * 6) * 120;

  //trasformazioni
  translate(width / 2, height / 2);
  rotate(frameCount);


  stroke(lerpColor(color('#1433E2'), color('#fff'), frameCount / 180));

  fill(lerpColor(color('#1433E2'), color('#fff'), frameCount / 180));

  stroke(lerpColor(color('#fff'), color('#1433E2'), frameCount / 180));

  //petali

  line(0, 0, 0, angle2);
  line(0, 0, 0, -angle2);


  //stop
  if (frameCount == 180) {
    noLoop();
  }


}
