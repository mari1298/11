var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createSprite(200,200)
path.addImage(pathImg)


//Criando menino que corre 



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
boy = createSprite(200,350)
boy.addAnimation("boyimg", boyImg)
boy.scale=0.03

}

function draw() {
  background(0);
  path.velocityY = 4;

  // Menino se movendo no eixo X com o mouse
  edges= createEdgeSprites();
  boy.collide(edges[3]);



 //Reiniciar o fundo
  if(path.y>390){
    path.y = height/2


  }

 drawSprites();
}