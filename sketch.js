var background,bg
var cat, catImg1,catImg2,catImg3,catImg4
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4
var i=0
function preload() {
    //load the images here

    bg=loadImage("images/garden.png")
    catImg1=loadImage("images/cat1.png")
    catImg2=loadImage("images/cat2.png")
    catImg3=loadImage("images/cat3.png")
    catImg4=loadImage("images/cat4.png")
    mouseImg1=loadImage("images/mouse1.png")
     mouseImg2=loadImage("images/mouse2.png")
     mouseImg3=loadImage("images/mouse3.png")
     mouseImg4=loadImage("images/mouse4.png")
     
 
}

function setup(){
    createCanvas(800,800);
    
    //create tom and jerry sprites here

     cat=createSprite(600,600,20,50)
     cat.addImage(catImg1)
     cat.scale=0.15

     mouse=createSprite(200,600,20,20)
     mouse.addImage(mouseImg2)
     mouse.scale = 0.12

}

function draw() {   
    
    background(bg);
    //Write condition here to evalute if tom and jerry collide

  if(mouse.x+mouse.width/2>cat.x ){
        // cat.velocityX=0
        
        cat.addAnimation("catsitting",catImg4)
        cat.changeAnimation("catsitting")

        mouse.addAnimation("mousehappy",mouseImg4)
        mouse.changeAnimation("mousehappy")
    }
//  keyPressed()

    drawSprites();
}


function keyPressed(){
       
  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      
    mouse.addAnimation("mouseteasing",mouseImg3 )
   mouse.changeAnimation("mouseteasing")
    mouse.frameDelay=25
    cat.x=cat.x-10
     if(i===0){
    cat.addAnimation("catmoving",catImg2)
    cat.changeAnimation("catmoving")
    i=1
     }
    else{
     cat.addAnimation("catmoving2",catImg3)
     cat.changeAnimation("catmoving2")
     i=0
    
    }
}
}


