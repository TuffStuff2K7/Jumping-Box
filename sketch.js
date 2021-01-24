var boxGroup1, boxGroup2, boxGroup3, boxGroup4, ball, spawn;

var music;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){

    createCanvas(800,400);
    ball = createSprite(400,100,50,50);
    ball.velocityY = 5;
    
    boxGroup1 = new Group();
    boxGroup2 = new Group();
    boxGroup3 = new Group();
    boxGroup4 = new Group();

    spawn = createSprite(400,200,100,10);

    music.loop();

}

function draw() {

    background("#1b262c");

    ball.velocityY += 0.8;

    if(ball.isTouching(boxGroup1)){

        ball.collide(boxGroup1);
        ball.shapeColor = "#ffacb7";
        ball.velocityX = -4;

        if(keyDown("up")){
            ball.velocityY = -12;
        }
    }

    if(ball.isTouching(boxGroup2)){

        ball.collide(boxGroup2);
        ball.shapeColor = "#f2a365";
        ball.velocityX = -4;

        if(keyDown("up")){
            ball.velocityY = -12;
        }
    }

    if(ball.isTouching(boxGroup3)){

        ball.collide(boxGroup3);
        ball.shapeColor = "#a4c5c6";
        ball.velocityX = -4;

        if(keyDown("up")){
            ball.velocityY = -12;
        }
    }

    if(ball.isTouching(boxGroup4)){

        ball.collide(boxGroup4);
        ball.shapeColor = "#ffffdd";
        ball.velocityX = -4;

        if(keyDown("up")){
            ball.velocityY = -12;
        }
    }

    if(keyDown("right") && frameCount>200){

        ball.velocityX = 0;
        ball.x +=5 ;

    }

    if(keyDown("left") && frameCount>200){

        ball.velocityX = 0;
        ball.x -= 5;
        
    }

    if(frameCount%75 === 0){
        platform(Math.round(random(1,4)));
    }

    ball.collide(spawn);
    if(frameCount === 200){
        spawn.destroy();
    }

    drawSprites();

    fill("#ffffdd");
    textSize(48);
    textAlign(CENTER,CENTER);
    if(ball.y > 450){
        text("YOU LOSE",width/2,height/2);
    }
}

function platform(r){

    var box = createSprite(850,random(250,350),150,25);
    box.velocityX = -4;

    switch(r){
        case 1: 
            boxGroup1.add(box);
            box.shapeColor = "#ffacb7";
            break;

        case 2:
            boxGroup2.add(box);
            box.shapeColor = "#f2a365";
            break;

        case 3:
            boxGroup3.add(box);
            box.shapeColor = "#a4d5cd";
            break;

        default:
            boxGroup4.add(box);
            box.shapeColor = "#ffffdd";
            break;
    }

    box.lifetime = 250;
}