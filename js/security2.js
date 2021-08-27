class Security2 {

    constructor(){
        this.greeting=createElement("h2","who was the first president")
        this.greeting.position(90,40)

         

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background','pink');    

        this.greeting=createElement("h2","who was the first lady prime minister")
        this.greeting.position(600,170)

        this.access2 = createInput("Code1")
        this.access2.position(600,220);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(600,250);
        this.button2.style('background', 'pink');

        this.greeting=createElement("h2","who was the first cheif justice")
        this.greeting.position(90,240)

        this.access3 = createInput("Code1")
        this.access3.position(90,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(90,320);
        this.button3.style('background', 'pink'); 
    }

    display(){
        
        text("hi welcome to next level--->",200,200)
        button10.hide()
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        button8.mousePressed(() => {
           
            button8.hide();
            
                score++;
            
        });


    }
}