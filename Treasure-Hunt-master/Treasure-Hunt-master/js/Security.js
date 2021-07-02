class Security {
   
    constructor(){

        //  code to create the input and button elements
        
            this.access1= createInput("code1")
            this.access1.position(100,90)
            this.access1.style('background','white')
        
            
            this.button1 = createButton('Check');
            this.button1.position(100,20)
            this.style('background','lightgrey')
    

        
        
        }


    display(){

        // code to make the buttons function as expected

          this.button1.mousePressed(()=>{
              if(System.authenticate(accessCode1,this.access1.value())){
                  this.button1.hide();
                  this.access1.hide();
                  score++
              }
          }));

    }
}