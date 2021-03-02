var kidScale = .63;
var xKid = 1050;
var yKid = 650;
var climberScale = 1;
var stubbornFontSize = 255;
var fontSize = 75;
var climbFontSize = 0;
var ufoScale = 5;
var xUFO = 1200;
var yUFO = 220;
var ufoSpeed = 1;
var kidSpeed = -1;
var tractorbeamOpacity = 50;
//This is simply a variable to keep time, 60 = 1 sec
var VARTOKEEPSANITY = 0;
var stars = 0;
var xClimber = 350;
var yClimber = 1000;
 
// Variables for sky color change
var firstShell = [85, 121, 157];
var secondShell = [119, 162, 194];
var thirdShell = [128, 171, 207];
var forthShell = [137, 185, 221];
 
function setup(){
    createCanvas(1100, 700);
    noStroke();
}
 
function draw(){ 
    sky();
    mountains();
    stubborn();
    climber();
    stubbornText();
    theClimbText();
    kid();
    ufo();
    pace();
    startOver();
}
 
function stubborn(){
    push();
        translate(580,0);
        scale(.63);
        fill(255,146,131);
        stroke(255,146,131);
        ellipse(400,350,300,260);
        //These are gonna be the trees and will be drawn from left to right
        fill(92,55,0);
        stroke(92,55,0);
        rect(125,550,50,300,8);
        rect(375,550,50,300,8);
        rect(625,550,50,300,8);
        //Left tree branch of first tree
        quad(70,510,100,510,150,550,130,565);
        quad(50,495,102,495,102,510,50,510);
        quad(50,465,60,460,68,495,50,495);
        quad(80,420,85,420,60,460,50,465);
        quad(80,390,85,390,85,420,80,420);
        rect(82,470,19,45,2);
        quad(25,420,30,420,90,475,82,475);
        quad(22,445,50,445,55,450,24,450);
        quad(10,420,14,420,30,450,22,450);
        quad(125,430,130,430,100,470,92,470); 
        quad(200,475,220,475,175,560,150,550);
        quad(200,450,220,450,219,475,201,475);
        quad(170,415,175,405,215,450,200,450);
        quad(155,405,175,405,170,415,155,415);
        quad(155,413,160,415,140,422,135,422);
        quad(135,390,140,390,160,410,155,410);
        quad(240,410,250,410,220,455,210,455);
        quad(220,380,225,380,245,410,240,410);
        quad(240,380,245,380,250,410,245,410);
        //This is the second tree's branches, these things suck
        //this next one is the base of the branches
        quad(370,500,440,500,425,555,375,555);
        quad(360,460,375,460,390,500,380,550);
        quad(340,440,355,440,375,460,360,460);
        quad(325,410,330,410,355,440,340,440);
        quad(310,380,315,380,330,410,325,410);
        quad(335,380,340,380,330,410,325,410);
        quad(390,410,400,410,370,460,360,460);
        quad(370,380,375,380,400,410,390,410);
        quad(410,380,415,380,400,410,390,410);
        quad(460,460,465,465,440,500,430,500);
        quad(450,410,455,410,465,465,460,460);
        quad(430,380,435,380,455,410,450,410);
        quad(470,380,475,380,455,410,450,410);
        quad(430,440,440,440,420,500,405,500);
        quad(500,410,515,410,440,440,430,440);
        quad(495,380,500,380,510,410,500,410);
        quad(525,380,530,380,515,410,500,410);
        //This next round is for the third trees branches
        quad(610,520,625,520,670,555,625,555);
        quad(610,435,625,440,625,520,610,520);
        quad(570,425,575,425,625,520,610,520);
        quad(555,380,560,380,575,425,570,425);
        quad(580,380,585,380,575,425,570,425);
        quad(595,375,600,375,615,440,610,440);
        quad(680,445,700,445,675,555,640,555);
        quad(670,430,680,430,700,445,680,445);
        quad(650,390,655,390,680,430,670,430);
        quad(640,370,645,370,655,390,650,390);
        quad(660,360,665,360,655,390,650,390);
        quad(685,355,690,355,655,380,653,380);
        quad(730,390,740,390,700,450,690,450);
        quad(715,370,720,370,740,390,730,390);
        quad(745,370,750,370,740,390,730,390);
    pop();
}
 
function kid(){
    push();
        translate(xKid,yKid);
        scale(kidScale);
        stroke(45,121,255);
        fill(45,121,255);
        quad(25,10,45,15,35,40,18,35);
        quad(55,15,75,10,80,35,60,40);
        stroke(144,0,235);
        fill(144,0,235);
        ellipse(50,10,50,15);
        //This is his body and scarf
        stroke(245,231,37);
        fill(245,231,37); 
        quad(70,-50,75,-60,90,5,65,0);
        stroke(144,0,235);
        fill(144,0,235);
        quad(30,-50,70,-55,75,10,25,10);
        stroke(245,231,37);
        fill(245,231,37);
        ellipse(50,-50,50,20);
        //This is his head
        stroke(232,122,90);
        fill(232,122,90);
        ellipse(50,-80,50);
        //These are his shoes
        fill(245,87,20);
        stroke(245,87,20);
        quad(18,35,35,40,33,43,16,38);
        quad(60,40,80,35,80,38,60,43);
        //This is book
        rect(30,-30,40,30);
        fill(144,0,235);
        stroke(144,0,235);
        rect(45,-40,15,50);
        fill(233,122,90);
        stroke(233,122,90);
        ellipse(52,0,20,10);
        //This is his nose.
        stroke(232,122,90);
        fill(232,122,90);
        triangle(20,-100,45,-100,42,-80);
        fill(148,24,245);
        stroke(148,24,245);
        rect(48,-105,20,50);
        ellipse(70,-80,30,48);
        //This is the kid moving across the scene
        if (VARTOKEEPSANITY < 960){
            xKid += kidSpeed;
        }
        //This is the kid being beamed up
        if (VARTOKEEPSANITY >960 && VARTOKEEPSANITY < 1400){
            yKid += -1;
            kidScale += -0.001;
        }
        //This is him following the UFO and going to the right
        if (VARTOKEEPSANITY > 1400 && VARTOKEEPSANITY < 1640){
            xKid += 2* ufoSpeed
        }
        //This is the Kid/UFO yeeting themselves off the screen
        if (VARTOKEEPSANITY > 1640 && VARTOKEEPSANITY < 1940){
            xKid += 3* -ufoSpeed
            yKid += 3* -ufoSpeed
        }
        if (VARTOKEEPSANITY > 2710 && VARTOKEEPSANITY < 2770) {
            xKid = 1050;
            yKid = -200;
            xUFO = 1050;
            yUFO = -200;
        }
        if (VARTOKEEPSANITY > 2770 &&  VARTOKEEPSANITY < 2950 ) {
            yKid += 4.5;
            yUFO += 4.5;
        }
        if (VARTOKEEPSANITY > 2950 && VARTOKEEPSANITY < 3210) {
            kidScale = .63;
            yUFO += -4.4;
            xUFO += -4.4;
        }
    pop();
}
 
function sky(){
    noStroke();
    fill(firstShell);
    ellipse(550,540,1550);
    fill(secondShell);
    ellipse(550,540,1500)
    fill(thirdShell);
    ellipse(550,540,1400)
    fill(forthShell);
    ellipse(550,540,1200)
    fill(255,255,255, stars);
    ellipse(59,23,6);
    ellipse(170,207,6);
    ellipse(334,84,6);
    ellipse(286,56,6);
    ellipse(320,129,6);
    ellipse(363,133,6);
    ellipse(34,47,2.5);
    ellipse(53,70,2.5);
    ellipse(43,79,2.5);
    ellipse(37,94,2.5);
    ellipse(63,88,2.5);
    ellipse(62,109,2.5);
    ellipse(90,177,3);
    ellipse(94,192,2.5);
    ellipse(93,203,1.5);
    ellipse(83,201,2.5);
    ellipse(117,171,2.5);
    ellipse(145,186,1.5);
    ellipse(150,217,2.5);
    ellipse(135,240,3);
    ellipse(169,240,2.5);
    ellipse(182,229,1.5);
    ellipse(209,196,2.5);
    ellipse(206,193,2.5);
    ellipse(190,185,1.5);
    ellipse(158,150,2.5);
    ellipse(209,150,2.5);
    ellipse(162,108,1.5);
    ellipse(155,94,3);
    ellipse(128,46,2.5);
    ellipse(105,33,1.5);
    ellipse(234,23,2.5);
    ellipse(222,76,1.5);
    ellipse(219,102,3);
    ellipse(208,151,2.5);
    ellipse(217,182,1.5);
    ellipse(211,194,2.5);
    ellipse(241,127,3);
    ellipse(279,86,3);
    ellipse(310,60,2.5);
    ellipse(304,23,2.5);
    ellipse(368,37,1.5);
    ellipse(378,33,3);
    ellipse(364,61,1.5);
    ellipse(364,75,2.5);
    ellipse(370,111,2.5);
    ellipse(370,123,2.5);
    ellipse(357,122,1.5);
    ellipse(372,165,2.5);
    ellipse(301,170,1.5);
    ellipse(241,129,2.5);
    ellipse(244,129,2.5);
 
    if(VARTOKEEPSANITY <= 366){
        firstShell[0]+=0.15821/2;
        firstShell[1]-=0.15821/2;
        firstShell[2]+=0.42553/2;
        secondShell[0]+=0.15275/2;
        secondShell[1]-=0.07092/2
        secondShell[2]+=0.30005/2;
        thirdShell[0]+=0.16366/2;
        thirdShell[1]+=0.10365/2;
        thirdShell[2]+=0.24004/2;
        forthShell[0]+=0.16912/2;
        forthShell[1]+=0.15275/2;
        forthShell[2]+=0.16912/2;
    }
 
    if(VARTOKEEPSANITY > 366 && VARTOKEEPSANITY <= 732){
        firstShell[0]-=0.12547/2;
        firstShell[1]-=0.14184/2;
        firstShell[2]-=0.01091/2;
        secondShell[0]-=0.14729/2;
        secondShell[1]-=0.20185/2;
        secondShell[2]-=0.09819/2;
        thirdShell[0]-=0.02727/2;
        thirdShell[1]-=0.21822/2;
        thirdShell[2]-=0.02727/2;
        forthShell[0]+=0.06546/2;
        forthShell[1]-=0.28368/2;
        forthShell[2]-=0.01091/2;
    }
 
    if(VARTOKEEPSANITY > 732 && VARTOKEEPSANITY <= 1098){
        firstShell[0]-=0.19094/2;
        firstShell[1]-=0.19639/2;
        firstShell[2]-=0.45280/2;
        secondShell[0]-=0.33278/2;
        secondShell[1]-=0.25095/2;
        secondShell[2]-=0.52918/2;
        thirdShell[0]-=0.45826/2;
        thirdShell[1]-=0.39825/2;
        thirdShell[2]-=0.44735/2;
        forthShell[0]-=0.51827/2;
        forthShell[1]-=0.32733/2;
        forthShell[2]-=0.28914/2;
        stars += 0.25;
    }
 
    if(VARTOKEEPSANITY > 1098 && VARTOKEEPSANITY <= 1464){
        firstShell[0]-=0.07835/2;
        firstShell[1]-=0.05597/2;
        firstShell[2]-=0.09328/2;
        secondShell[0]-=0.05970/2;
        secondShell[1]-=0.06343/2;
        secondShell[2]-=0.12313/2;
        thirdShell[0]-=0.07462/2;
        thirdShell[1]-=0.09328/2;
        thirdShell[2]-=0.17164/2;
        forthShell[0]-=0.11940/2;
        forthShell[1]-=0.15298/2;
        forthShell[2]-=0.24626/2;
        stars += 0.25;
    }
 
    if(VARTOKEEPSANITY > 1464 && VARTOKEEPSANITY <= 1830){
        firstShell[0]-=0.01092/2;
        firstShell[1]-=0.03825/2;
        firstShell[2]-=0.09836/2;
        secondShell[1]-=0.03825/2;
        secondShell[2]-=0.10382/2;
        thirdShell[0]-=0.02185/2;
        thirdShell[1]-=0.05464/2;
        thirdShell[2]-=0.09289/2;
        forthShell[0]-=0.01639/2;
        forthShell[1]-=0.02732/2;
        forthShell[2]-=0.05464/2;
        stars += 0.25;
    }
}
    
function mountains(){
    noStroke(); 
        fill('#7B836C');
        //This is Sal's orginial code for his background of lab 2
        beginShape(); // Back Mountain
        vertex(-1, 298);
        vertex(4, 295);
        vertex(24, 286);
        vertex(34, 277);
        vertex(44, 268);
        vertex(49, 273);
        vertex(52, 273);
        vertex(58, 284);
        vertex(72, 291);
        vertex(77, 293);
        vertex(88, 305);
        vertex(103, 313);
        vertex(125, 335);
        vertex(141, 344);
        vertex(143, 347);
        vertex(205, 540);
        vertex(0, 540);
        endShape(); // Third Mountain
        fill('#5b5337');
        beginShape();
        vertex(375, 539);
        vertex(314, 237);
        vertex(285, 195);
        vertex(266, 180);
        vertex(250, 192);
        vertex(247, 200);
        vertex(231, 206);
        vertex(227, 205);
        vertex(225, 212);
        vertex(225, 212);
        vertex(220, 223);
        vertex(199, 244);
        vertex(195, 254);
        vertex(189, 257);
        vertex(189, 265);
        vertex(182, 281);
        vertex(178, 287);
        vertex(165, 313);
        vertex(147, 346);
        vertex(133, 366);
        vertex(126, 396);
        vertex(90, 443);
        vertex(50, 488);
        vertex(29, 538);
        vertex(29, 540);
        endShape();
        fill('#595f43');
        beginShape(); // Second Mountain
        vertex(515, 202);
        vertex(394, 215);
        vertex(354, 223);
        vertex(329, 231);
        vertex(311, 240);
        vertex(293, 261);
        vertex(278, 281);
        vertex(265, 298);
        vertex(246, 334);
        vertex(236, 341);
        vertex(200, 370);
        vertex(186, 388);
        vertex(170, 407);
        vertex(171, 422);
        vertex(154, 436);
        vertex(148, 444);
        vertex(141, 457);
        vertex(136, 472);
        vertex(132, 497);
        vertex(130, 509);
        vertex(119, 524);
        vertex(113, 534);
        vertex(110, 540);
        vertex(452, 540);
        endShape();
        fill('#56340e');
        beginShape(); // Main Mountain
        vertex(447, 0);
        vertex(438, 13);
        vertex(441, 35);
        vertex(439, 45);
        vertex(435, 52);
        vertex(420, 74);
        vertex(416, 87);
        vertex(406, 100);
        vertex(414, 175);
        vertex(404, 193);
        vertex(394, 198);
        vertex(392, 239);
        vertex(390, 239);
        vertex(386, 243);
        vertex(375, 302);
        vertex(375, 310);
        vertex(381, 318);
        vertex(378, 321);
        vertex(381, 324);
        vertex(380, 328);
        vertex(383, 336);
        vertex(386, 342)
        vertex(369, 424);
        vertex(353, 444);
        vertex(347, 453);
        vertex(332, 499);
        vertex(331, 511);
        vertex(321, 525);
        vertex(321, 540);
        vertex(550, 540);
        vertex(550, 0)
    endShape(CLOSE);
}
 
function climber(){
    // GUY
    push();
        noStroke();
        fill(100)
        translate(xClimber, yClimber);
        scale(climberScale);
        fill('#308dbc');
        beginShape(); // Bottom Shoe
            vertex(0, 0);
            vertex(4, -3);
            vertex(2, -5);
            vertex(11, -13);
            vertex(12, -16);
            vertex(11, -17);
            vertex(8, -17);
            vertex(-5, -4);
            vertex(0, 0);
        endShape();
        beginShape(); // Top Shoe
            vertex(14, -57);
            vertex(14, -62);
            vertex(12, -61);
            vertex(13, -66);
            vertex(13, -72);
            vertex(11, -76);
            vertex(9, -73);
            vertex(9, -57);
            vertex(13, -57);
        endShape();
        fill('#c9c008');
        beginShape(); // Rain Coat
            vertex(-52, 2);
            vertex(-31, -2);
            vertex(-34, -19);
            vertex(-28, -3);
            vertex(-17, -10);
            vertex(-19, -25);
            vertex(-31, -41);
            vertex(-34, -56);
            vertex(-47, -92);
            vertex(-47, -92);
            vertex(-34, -102);
            vertex(-32, -105);
            vertex(-30, -112);
            vertex(-30, -130);
            vertex(-37, -131);
            vertex(-41, -118);
            vertex(-43, -113);
            vertex(-45, -108);
            vertex(-74, -88);
            vertex(-82, -88);
            vertex(-79, -99);
            vertex(-74, -106);
            vertex(-77, -106);
            vertex(-79, -105);
            vertex(-85, -108);
            vertex(-91, -101);
            vertex(-91, -91);
            vertex(-91, -85);
            vertex(-83, -80);
            vertex(-87, -63);
            vertex(-91, -49);
            vertex(-92, -36);
            vertex(-92, -32);
            vertex(-78, -14);
            vertex(-71, -21);
            vertex(-79, -38);
            vertex(-73, -52);
            vertex(-60, -40);
            vertex(-55, -32);
            vertex(-52, -20)
        endShape();
        fill('#b1c9c5');
        beginShape(); // White Shirt
        vertex(-52, -41);
        vertex(-37, -60);
        vertex(-53, -75);
        vertex(-64, -87);
        vertex(-68, -89);
        vertex(-68, -91);
        vertex(-73, -91);
        vertex(-74, -86);
        vertex(-70, -84);
        vertex(-67, -82);
        vertex(-63, -74);
        vertex(-57, -61);
        vertex(-55, -55);
        vertex(-53, -45);
        vertex(-53, -39);
        endShape();
        fill('#b69870');
        ellipse(-71, -14, 9); // Bottom Hand
        ellipse(-33, -134, 9); // Top Hand
        stroke('#5a3416');
        strokeWeight(1.5);
        line(69, -1000, -34, -138);
        line(-34, -138, -69, -15);
        line(-69, -15, -74, -14);
        line(-74, -14, -99, 500);
        noStroke();
        fill('#b1c9c5');
        beginShape(); //White thing on rain coat
        vertex(-78, -14);//
        vertex(-71, -21);//
        vertex(-70, -19);
        vertex(-76, -13);
        endShape();
        beginShape();
        vertex(-30, -129);
        vertex(-30, -131);
        vertex(-37, -132);
        vertex(-38, -131);
        endShape();
        fill('#d75523');
        beginShape(); // Pants
        vertex(-5, -4);
        vertex(5, -14);
        vertex(-5, -32);
        vertex(-7, -37);
        vertex(-9, -39);
        vertex(-22, -44);
        vertex(-11, -57);
        vertex(-9, -57);
        vertex(9, -57);
        vertex(9, -72);
        vertex(-7, -73);
        vertex(-11, -73);
        vertex(-14, -72);
        vertex(-20, -69);
        vertex(-30, -60);
        vertex(-34, -59);
        vertex(-34, -59);
        vertex(-37, -59);
        vertex(-52, -40);
        vertex(-49, -32);
        vertex(-43, -28);
        vertex(-29, -27);
        vertex(-19, -25);
        endShape();
        fill('#b69870');
        beginShape(); // Face
        vertex(-74, -87);
        vertex(-72, -92);
        vertex(-73, -96);
        vertex(-71, -101);
        vertex(-72, -102);
        vertex(-75, -101);
        vertex(-77, -103);
        vertex(-80, -99);
        vertex(-83, -94);
        vertex(-82, -87);
        endShape();
        fill('#952102')
        beginShape(); // Beard
        vertex(-72, -89);
        vertex(-73, -92);
        vertex(-70, -100);
        vertex(-73, -99);
        vertex(-77, -95);
        vertex(-80, -95);
        vertex(-82, -90);
        vertex(-81, -87);
        vertex(-78, -88);
        vertex(-79, -90);
        vertex(-78, -92);
        vertex(-76, -92);
        vertex(-71, -90);
        endShape();
        ellipse(-76, -99, 1.5)
        fill('#207bb4');
        beginShape(); // Blue Thing
        vertex(-72, -89);
        vertex(-68, -90);
        vertex(-64, -96);
        vertex(-66, -99);
        vertex(-68, -99);
        vertex(-72, -96);
        vertex(-72, -94);
        vertex(-73, -91);
        endShape();
    pop();
    
    if(VARTOKEEPSANITY >= 1700 && VARTOKEEPSANITY < 2710){
        xClimber += 0.085;
        yClimber -= 1;
    }
}
 
function theClimbText()
    {
    fill(255);
    stroke(255);
    quad(0, 540, 550, 540, 550, 700, 0, 700);
    fill(57,125,184,climbFontSize);
    textSize(fontSize);
    textFont("Sacramento");
    text("the climb,", 155, 640);
    //fill(121,132,105,climbFontSize);
    if (VARTOKEEPSANITY > 1700 && VARTOKEEPSANITY <= 2205) 
    {
        climbFontSize += 0.5;
    }
    if(VARTOKEEPSANITY > 2205 && VARTOKEEPSANITY <= 2710)
    {
        climbFontSize -= 0.5;
    }
    }
 
function stubbornText()
    {noStroke();
    fill(255,130,105,stubbornFontSize);
    textSize(fontSize);
    textFont("Georgia");
    text("STUBBORN",625,100);
    if (VARTOKEEPSANITY > 800 && VARTOKEEPSANITY <= 1400)
    {
    stubbornFontSize += -.425;
    }
    }
 
function ufo()
    {
    push();
        translate(xUFO,yUFO);
        scale(ufoScale);
        //These are the legs
        stroke(0);
        strokeWeight(2);
        line(0,0,10,10);
        line(0,0,-10,10);
        noStroke();
        strokeWeight(1);
        //This is the tractor beam
        fill(122,178,255,tractorbeamOpacity);
        quad(-5,0,5,0,20,100,-20,100);
        //This is the main bubble
        fill(254,247,23);
        ellipse(0,0,20,15);
        //This is the body
        fill(255);
        ellipse(0,3,40,10);
        fill(128);
        ellipse(0,3,38,8);
        //These are the lights
        fill(254,247,23);
        ellipse(-15,3,3,3);
        ellipse(15,3,3,3);
        ellipse(10,3,4,4);
        ellipse(-10,3,4,4);
        ellipse(4,3,5,5);
        ellipse(-4,3,5,5);
        //This is the UFO coming in
        if(VARTOKEEPSANITY > 480 && VARTOKEEPSANITY <960)
        {
         xUFO += 2.25 * -ufoSpeed;
         ufoScale += .008;
        }
        //This is the ufo leaving to the right
        if (VARTOKEEPSANITY > 1400 && VARTOKEEPSANITY < 1640) 
        {
        xUFO += 2* ufoSpeed
        tractorbeamOpacity = 0;
        }
        //This is the UFO going off the screen
        if (VARTOKEEPSANITY > 1640 && VARTOKEEPSANITY < 1940) 
        {
        xUFO += 3* -ufoSpeed
        yUFO += 3* -ufoSpeed
        }
    pop();
    }
 
function pace()
    {
    VARTOKEEPSANITY++;
    }

function startOver()
    {
    //This should reset everything to it's original postition
    if (VARTOKEEPSANITY > 3220) 
    {
        window.location.reload(true);
    }
}
 
 

