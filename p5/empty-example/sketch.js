var xPos = 400;
//this is the for the ball can grow up
var ballDiam = 40;

// Left Goal Variables
var leftGoalX = 0;
var leftGoalY = 200;
var leftGoalW = 60;
var leftGoalH = 120;


// Right Goal Variables
var rightGoalX = 750;
var rightGoalY = 200;
var rightGoalW = 60;
var rightGoalH = 120;

var ballColor = '#FD3B3F';

function setup() {
    // put setup code here
    createCanvas(800, 500);
}

function draw() {
    // put drawing code here
    //this is the soccer fiel    
    background("#45D921");
    strokeWeight(5);
    fill("#FFFFFF");
    ellipse(400, 250, 100, 100);
    line(400, 500, 400, 0);
    fill("#45D921");
    rect(0, 130, 110, 250);
    rect(700, 130, 110, 250);
    line(0, 497, 800, 497);
    line(0, 3, 800, 3);
    line(0, 500, 0, 0)
    line(800, 500, 800, 0);
    //    rect(0,200,60,120); 
    rect(750, 200, 60, 120);

    //        strokeWeight(2);

    // Left Goal
    fill("#45D921");
    rect(leftGoalX, leftGoalY, leftGoalW, leftGoalH);

    // Right Goal
    rect(rightGoalX, rightGoalY, rightGoalW, rightGoalH);

    //ball
    fill(ballColor);
    ellipse(mouseX, mouseY, ballDiam, ballDiam);

    if (mouseX > leftGoalX && mouseX < leftGoalX + leftGoalW && mouseY > leftGoalY && mouseY < leftGoalY + leftGoalH) {

        ballColor = 'blue';

        textSize(20);
        text("GOOOOOOOOOLL", 600, 480);
    }
    
        if (mouseX > rightGoalX && mouseX < rightGoalX + rightGoalW && mouseY > rightGoalY && mouseY < rightGoalY + rightGoalH) {

        ballColor = 'blue';

        textSize(20);
        text("GOOOOOOOOOLL", 600, 480);
    }



}



function mousePressed() {

    ballDiam = ballDiam + 20;

}
