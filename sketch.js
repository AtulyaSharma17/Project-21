var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);

    //create 4 different surfaces
    block1 = createSprite(100,590,100,50);
    block2 = createSprite(250,590,100,50);
    block3 = createSprite(400,590,100,50);
    block4 = createSprite(550,590,100,50);
    ball = createSprite(random(20,550),100,20,20);


    ball.shapeColor="red";
    block1.shapeColor="blue";
    block2.shapeColor="yellow";
    block3.shapeColor="green";
    block4.shapeColor="orange";


    ball.velocityX=2
    ball.velocityY=2









    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges)




    drawSprites();



    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor="blue"
        

    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor="yellow"
        music.stop()
        ball.velocityX=0
        ball.velocityY=0

    }

    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor="green"
        
    }

    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor="orange"
        music.play()

    }
}
