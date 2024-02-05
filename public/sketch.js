// Feel Change 
//
// Click buttons that update JSON in a text file

// load before sketch runs

function preload() {

}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  
  
  // Create the stop start button here
  
  button_bright = createButton("Feel Change 1");
  button_bright.position(100,200);
  button_bright.mousePressed(makeFeelChange1);
  
  button_tinny = createButton("Feel Change 2");
  button_tinny.position(250,200);
  button_tinny.mousePressed(makeFeelChange2);
  
  button_bassy = createButton("Feel Change 3");
  button_bassy.position(400,200);
  button_bassy.mousePressed(makeFeelChange3);
  
  
  
}

function draw() {
  
  background(255);

  
  textSize(12);
  background(bg);
  text('Feel Change', 100, 20);
 
  fill('yellow');
  
}

function makeFeelChange1() {
  
  // write to textfile a 1
  // change the background image
}

function makeFeelChange2() {
  
  // write to a textfile a 2
  // change the background image
}

function makeFeelChange3() {
  
  // write to a textfile a 3
  // change the background image
}

function keyPressed() {
  
}