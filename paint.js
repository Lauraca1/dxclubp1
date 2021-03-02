//Global Variables
var currentBrush = "brush";
var strokeSize = 1;

function setup(){
    createCanvas(1100, 700);
    background(255);
    noStroke();
}

function draw(){
    drawSidebar();
}

function drawSidebar(){
    fill(40);
    rect(0, 0, 100, 700);
}

function mousePressed(){
    
}