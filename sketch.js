var tom,tomImage;
var jerry,jerryImage;
var tomrunning;



function preload() {
tomImage=loadImage('images/tomOne.png');
jerryImage=loadImage('images/jerryOne.png');
tomrunning=loadAnimation('images/tomTwo.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(800,550,20,20);
tom.addImage(tomImage);
tom.scale = 0.1;

jerry=createSprite(100,550,20,20);
jerry.addImage(jerryImage);
jerry.scale=0.1;
}

function draw() {

    background(225);
    

    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation('tomrunning',tomImg2);
tom.changeAnimation('tomrunning');
 }

}
