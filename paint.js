
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
 *  - color picker
 *  - possible cypher easter egg?
 *  - brush picker
 *  - shape picker
 *  - matrix rain background?
 *  - testing
 *  - documentation
 */

function setup() {
  canvas = createCanvas(window.innerWidth - 55, window.innerHeight - 195)
  //canvas.position(50, 100);
  //canvas.position(10, 10, 'fixed')
  //noStroke()
  //textStyle(BOLD)

  // Create streams
  // for (let i = 0; i < total; i++) {
  //   rain.push(new Stream(i, random(1, height), random(2, 10)))
  // }
}
//global color variables
var r = 0;
var g = 0;
var b = 0;
var currentBrush = "Brush"
var currentStroke = 0

function draw() {
    //resizeCanvas(window.innerWidth, window.innerHeight)
    background(255)
    sidebar()
  //rain.forEach(s => s.draw())
}

/*This function will be what represents the pallete
 * in which the user will be able to change the color
 * they're using, the paint brush, etc....
 */
function sidebar(){
    // Sidebar
    noStroke()
    fill(0) // change to 25
    rect(0, 0, 100, window.innerHeight)

    noStroke();

    fill(40)
    rect(0, 0, 120, window.innerHeight)

    fill(25)
    rect(0, 0, 120, window.innerHeight)

    // Brushes
    stroke(100)
    fill(50)
    rect(25, 100, 60, 60)
    fill(255)
}   

function windowResized() {
  resizeCanvas(window.innerWidth - 55, window.innerHeight - 195)
}

