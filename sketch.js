var bg,bg2,form,system,code,security,security2object;
var score=0;
var togle=0
var button6,button7,button8,button9,background2,button10
function preload() {
  bg = loadImage("kbcback.jpg");
  bg2 = loadImage("win.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  button6 = createButton('Jawaha Lal Nehru');
  button6.position(220,410);
  button6.style('background', 'lightgrey');  
  
  button7 = createButton('Indra Gandhi');
  button7.position(240,450);
  button7.style('background', 'lightgrey');  

  button8 = createButton('DR Rajendra Prasad');
  button8.position(550,410);
  button8.style('background', 'lightgrey');  

  button9 = createButton('DR B.R Ambedkar');
  button9.position(550,450);
  button9.style('background', 'lightgrey'); 
  
  background2=createSprite(300,200,600,600)
 background2.addImage(bg2)
  background2.scale=3.2
  background2.visible=false

  
 

}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

 if(togle===1){
  clues()
 }


  if(score === 4) {
   // clear()
    background(bg2)
    clues()
    background2.visible=true
    background2.scale=4.5
    button7.hide()
    button6.hide()
    button9.hide()
    button10 = createButton('next')
    button10.position(370,390)
    button10.style('background','white')
    security2object= new Security2()
            
      security2object.display()
    
    drawSprites()
    button10.mousePressed(()=> {
      
      button10.hide()
      
      togle=1
  });


    fill("black")

    textSize(40);
   // text("TREASURE UNLOCKED",250, 200);
  }


  

  if(score!==4){
  fill("red")
   stroke("blue")
   text("WHO WAS THE FIRST PRESIDENT OF INDEPENDENT INDIA ??",200,370)
   fill("yellow")
   textSize(19)
   text("C",210,470)
   text("D",530,470)
   
  }
  
  
}