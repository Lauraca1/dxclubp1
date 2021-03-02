
/*The following code was grabbed from codepen.io and was written by
 *Cahil Foley in response to a video about Matrix Rain Video uploaded
 *to Youtube by "The Coding Train" channel
 *LINK TO THE VIDEO: https://www.youtube.com/watch?v=S1TQCi9axzg
 */

class Letter {
  constructor(x, y, d) {
    this.char = Letter.getChar()
    this.x = x
    this.y = y
    this.d = d
  }

  draw(index) {
    textSize(this.d)

    if (index === 0) {
      // If it's the first one make it white
      fill(255, 200)
    } else {
      // Otherwise make it green and fade it out more when it's towards then end
      fill(50, 255, 50, 200 - (index * 200) / 25)
    }

    text(this.char, this.x * (width / total), this.y)
  }

  switch() {
    this.char = Letter.getChar()
  }

  static getChar() {
    return String.fromCharCode(floor(0x30a0 + random(0, 96)))
  }
}


class Stream {
  constructor(x, y, ys) {
    this.x = x
    this.y = y
    this.ys = ys
    this.letters = []

    // Use the y speed to figure out the diameter
    this.d = ys * 2.5
    this.spacing = this.d + 2

    this.regenerateLetters()
  }

  regenerateLetters() {
    this.letters = []
    for (let i = 0; i < 25; i++) {
      this.letters.push(new Letter(this.x, this.y - i * this.spacing, this.d))
    }
  }

  draw() {
    // Update the position
    this.update()

    // Draw each letter
    this.letters.forEach((l, i) => l.draw(i))

    // 10% chance to randomly switch a letter
    if (random(1, 100) < 10) {
      this.letters[floor(random(this.letters.length))].switch()
    }
  }

  update() {
    // Add the speed to the stream head position
    this.y += this.ys

    // If there is enough space to add a letter at the start
    if (this.y >= this.letters[0].y + this.spacing) {
      // Add a new letter at the start
      this.letters.unshift(new Letter(this.x, this.y, this.d))

      // Remove the last item
      this.letters.pop()
    }

    // If the last character has gone off the screen
    if (this.letters[this.letters.length - 1].y > height + this.d) {
      // Reset the head to the top of the screen
      this.y = 0
      
      // Regenerate letters as all x values will change
      this.regenerateLetters()
    }
  }
}

let total = 80
let rain = []

/* The following code was written by Laura C., Diego G. and Salvador G.
 * for the final meeting of our club, the Digital Transformation Club(Dx Club)
 * which takes/took place on March 3rd 2021 at 6pm PST.

 * The purpose of this code is to recreate MS Paint using the JavaScript library P5.js
 * The code located underneath this comment block is a modified version of the draw/setup
 * function that was given to us by Cahil Foley.
 */

/*
 *TODO:
 *  - color picker - Laura
 *  - possible cypher easter egg? - Diego
 *  - brush picker - Sal
 *  - shape picker - Sal
 *  - matrix rain background?
 *  - testing
 *  - documentation
 */

// GLOBAL VARIABLES

var r = 0;
var g = 0;
var b = 0;
var currentBrush = 'square';
var currentStroke = 100;
var buttons = []; // Used for buttons and other interactions
var canvas;
var shapes = [];

function setup() {
  createCanvas(window.innerWidth - 55, window.innerHeight - 195)
  buttons.push(new Hitbox(25, 100, 60, 60, 'square'));
  buttons.push(new Hitbox(25, 200, 60, 60, 'circle'));
  buttons.push(new Hitbox(25, 300, 60, 60, 'pencil'));
  buttons.push(new Hitbox(25, 400, 60, 60, 'special'));

  for(var i = 0; i < buttons.length; i++){
    buttons[i].active = true; // set all hitboxes active
  }
  //[3].active = false; // False for the special button until deciphered

  canvas = new Hitbox(120, 0, window.innerWidth - 175, window.innerHeight - 195);

  //canvas.position(50, 100);
  //canvas.position(10, 10, 'fixed')
  //noStroke()
  //textStyle(BOLD)

  // Create streams
  // for (let i = 0; i < total; i++) {
  //   rain.push(new Stream(i, random(1, height), random(2, 10)))
  // }
}

function draw() {
    //resizeCanvas(window.innerWidth, window.innerHeight)
    background(255);
    sidebar();
    for(var i = 0; i < shapes.length; i++){
      shapes[i].draw();
    }
  //rain.forEach(s => s.draw())
}

/*This function will be what represents the pallete
 * in which the user will be able to change the color
 * they're using, the paint brush, etc....
 */
function sidebar(){
    // Sidebar
  noStroke();
  fill(25); // change 25
  rect(0, 0, 120, window.innerHeight);

  // Brushes

  // Square
  stroke(100);
  fill(50);
  rect(25, 100, 60, 60);
  fill(255);
  rect(42.5, 117.5, 25, 25);

  // Circle
  stroke(100);
  fill(50);
  rect(25, 200, 60, 60);
  fill(255);
  ellipse(55, 230, 30);

  // Pencil
  stroke(100);
  fill(50);
  rect(25, 300, 60, 60)   ;
  
  // special brush
  stroke(100);
  fill(50);
  rect(25, 400, 60, 60);

}

function mousePressed(){

  // Check if a brush button was pressed
  for(var i = 0; i < buttons.length; i++){
    if(buttons[i].check(mouseX, mouseY)){
      currentBrush = buttons[i].id;
      console.log("Current brush: " + currentBrush);
    }
  }

  if(canvas.check(mouseX, mouseY)){
    console.log("Draw to the canvas!");
    if(currentBrush == 'square'){ // Add a square to the canvas
      console.log("Square added");
      shapes.push(new Square(mouseX - (currentStroke / 2), mouseY - (currentStroke / 2), currentStroke, [255, 0, 0]));
    } else if(currentBrush == 'circle'){ // add a circle to the canvas
      console.log("Circle added");
      shapes.push(new Circle(mouseX, mouseY, currentStroke, [0, 255, 0]))
    }
  }
}

class Hitbox{
  //ox and oy are the coords for the top left corner of the thing you want the hitbox over
  constructor(ox, oy, w, h, id){
    this.x = ox; // x top corner
    this.y = oy; // y top corner
    this.w = w; // width
    this.h = h; // height
    this.id = id; // Used for identifying a hitbox
    this.active = true; // To disable a hitbox set active to false
  }

  update(){ // Use if you need to move the hitbox somewhere else during runtime
    this.x += hx;
    this.y += hy;
    fill(255, 0, 0, 100);
  }

  check(mX, mY){ //This will return true or false if mouse was clicked on top of the hitbox
    if(mX >= this.x && mX <= this.x + this.w && mY >= this.y && mY <= this.y + this.h && this.active)
        return true;
    else
        return false;
  }
}

class Square{
  constructor(ox, oy, size, color){
    this.x = ox;
    this.y = oy;
    this.r = color[0];
    this.g = color[1];
    this.b = color[2];
    this.size = size;
  }

  draw(){
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.size, this.size);
  }
}

class Circle{
  constructor(ox, oy, size, color){
    this.x = ox;
    this.y = oy;
    this.r = color[0];
    this.g = color[1];
    this.b = color[2];
    this.size = size;
  }

  draw(){
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size);
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth - 55, window.innerHeight - 195)
}

