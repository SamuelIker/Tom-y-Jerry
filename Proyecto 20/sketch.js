var canvas,bg;
var together;
var tom, tomImg1,tomImg2, tomImg3, tomImg4;
var jerry, jerryImg1,jerryImg2, jerryImg3, jerryImg4;

function preload() {
    //carga aquí las imágenes
    bgImg = loadImage("imagenes/garden.png");
     
   jerryImg1 = loadImage('imagenes/jerryOne.png');
   jerryImg2 = loadImage('imagenes/jerryTwo.png');
   jerryImg3 = loadImage('imagenes/jerryThree.png');
   jerryImg4 = loadImage('imagenes/jerryFour.png');

   tomImg1 = loadAnimation('imagenes/tomOne.png');
   tomAnimation = loadAnimation ('imagenes/tomTwo.png', 'imagenes/tomThree.png');
  
   tomImg4 = loadAnimation('imagenes/tomFour.png');
  
    

}

function setup(){
    canvas = createCanvas(1000,800);

    bg = createSprite(20,20,20,20);
    
    tom = createSprite(800,700,20,20);
    jerry = createSprite(200,700,20,20);
 
    tom.addAnimation('moviendose', tomImg1);
    tom.scale = 0.1

    jerry.addImage( jerryImg1);
    jerry.scale = 0.1

}

function draw() {
    background(bgImg);
    //Escribe aquí la condición para evaluar si Tom y Jerry chocan

    if (jerry.isTouching(tom)) {
        jerry.addImage(jerryImg4);
        tom.velocityX = 0;
       tom.addAnimation('fin', tomImg4);
    }
    keyPressed();
    drawSprites();
}


function keyPressed() {

   if (keyDown === LEFT_ARROW) { 
        jerry.addImage( jerryImg2);

        tom.velocityX = -2
        tom.addAnimation('moviendose2', tomAnimation)
    }
//Escribe aquí el código para la animación de movimeinto y cambio
}