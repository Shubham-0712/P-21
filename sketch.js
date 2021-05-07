var canvas;
var music;
var redSurface, greenSurface, yellowSurface, blueSurface;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    edges = createEdgeSprites();

    //create 4 different surfaces

    redSurface = createSprite(100,575,200,50);
    redSurface.shapeColor = "red";

    greenSurface = createSprite(300,575,200,50);
    greenSurface.shapeColor = "green";

    yellowSurface = createSprite(500,575,200,50);
    yellowSurface.shapeColor = "yellow";

    blueSurface = createSprite(700,575,200,50);
    blueSurface.shapeColor = "blue";



    //create box sprite and give velocity

    box = createSprite(random(20,750),40,50,50);
    box.shapeColor = "white";
    box.velocityX = -20;
    box.velocityY = 20;
    



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    if(box.isTouching(redSurface) && box.bounceOff(redSurface)){

      box.shapeColor = "red";
      music.play();
    }

    if(box.isTouching(greenSurface)){

        box.shapeColor = "green";
  
      }

      if(box.isTouching(blueSurface)){

        box.shapeColor = "blue";
  
      }

      if(box.isTouching(yellowSurface)){

        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;

      }

      



    box.bounceOff(edges);
    box.bounceOff(redSurface);
    box.bounceOff(greenSurface);
    box.bounceOff(yellowSurface);
    box.bounceOff(blueSurface);

drawSprites();
    //add condition to check if box touching surface and make it box
}
