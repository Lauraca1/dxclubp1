//The following code was written by Laura C., Diego G. and Salvador G.
//for the final meeting of our club, the Digital Transformation Club(Dx Club)

//The purpose of this code is to recreate MS Paint using the JavaScript library
//P5.js

/*
function setup(){
    createCanvas(1100, 700);
    background(255);
    noStroke();
}
 
function draw(){ 

    // Sidebar
    fill(40);
    rect(0, 0, 100, 700);
}
*/



//The following code was grabbed from codepen.io and was written by
//Cahil Foley in response to a video about Matrix Rain Video uploaded
//to Youtube by "The Coding Train" channel
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

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)

  noStroke()
  textStyle(BOLD)

  // Create streams
  for (let i = 0; i < total; i++) {
    rain.push(new Stream(i, random(1, height), random(2, 10)))
  }
}

function draw() {
  background(0)
  rain.forEach(s => s.draw())
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight)
}

