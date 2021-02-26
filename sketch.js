var canvas;
var music;
var box;
var pinkBox, yellowBox, blueBox, greenBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(675,675);

    box = createSprite (random (20, 650), 400, 20, 20);
    box.shapeColor = "white";
    box.velocityY = 4;

    pinkBox = createSprite (75, 650, 150, 50);
    pinkBox.shapeColor = "pink";

    yellowBox = createSprite (250, 650, 150, 50);
    yellowBox.shapeColor = "yellow";

    greenBox = createSprite (425, 650, 150, 50);
    greenBox.shapeColor = "green";

    blueBox = createSprite (600, 650, 150, 50);
    blueBox.shapeColor = "blue";

    createEdgeSprites ();

}

function draw() {
    background(rgb(169,169,169));

    music.loop ();


    if (pinkBox.isTouching (box) && box.bounceOff (pinkBox)) {
        box.shapeColor = "pink";
    }
    
    if (yellowBox.isTouching (box)) {
        box.shapeColor = "yellow";
        box.velocityY = 0;
        music.stop ();
    }

    if (greenBox.isTouching (box) && box.bounceOff (greenBox)) {
        box.shapeColor = "green";
    }

    if (blueBox.isTouching (box) && box.bounceOff (blueBox)) {
        box.shapeColor = "blue";
    }

    box.bounceOff(edges);

    drawSprites ();

}
