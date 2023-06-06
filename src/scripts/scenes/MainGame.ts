export default class Game extends Phaser.Scene {
    fpsText
  private total : number;
  private sum : number[];
  private key;
    constructor() {
      super({ key: 'MainGame' })

      this.total = 0;
      this.sum = [];
    }
    
    create()
    {

      this.key = this.add.image(200, 200, 'Key');
      this.key.setScale(0.1,0.1)
      this.key.setAlpha(0);
      let gameState = {
        buttons : [
          this.add.image(400, 360, 'Button1').setInteractive().on('pointerdown', ()=> {
            this.addToArray(1) 
          }),
          this.add.image(460, 360, 'Button2').setInteractive().on('pointerdown', ()=> {
            this.addToArray(2) 
          }),
          this.add.image(520, 360, 'Button3').setInteractive().on('pointerdown', ()=> {
            this.addToArray(3) 
          }),
          this.add.image(400, 460, 'Button4').setInteractive().on('pointerdown', ()=> {
            this.addToArray(4) 
          }),
          this.add.image(460, 460, 'Button5').setInteractive().on('pointerdown', ()=> {
            this.addToArray(5) 
          }),
          this.add.image(520, 460, 'Button6').setInteractive().on('pointerdown', ()=> {
            this.addToArray(6) 
          }),
          this.add.image(400, 560, 'Button7').setInteractive().on('pointerdown', ()=> {
            this.addToArray(7) 
          }),
          this.add.image(460, 560, 'Button8').setInteractive().on('pointerdown', ()=> {
            this.addToArray(8) 
          }),
          this.add.image(520, 560, 'Button9').setInteractive().on('pointerdown', ()=> {
            this.addToArray(9) 
          }),
          
     
     
        ],
        /*
         map : new Map ([
          ['Button1', 1],
          ['Button2', 2]

        ])
        For in the future, If we can implement a randomizer to the puzzle
        */
      }

      
    
     
    }

   

    addToArray(int)
    {
    
      var answer = 0;

      
      this.total += 1;
      console.log('Current total is ' + this.total);
      

      this.sum.push(int);
      console.log("Clicked! " + int);

      
    
      if (this.total === 4 )
      {
        console.log("It's been Pressed 4 times " + this.total)
     

       for(var i = 0; i < this.sum.length; i++)
       {
       
        answer += this.sum[i];
        console.log(this.sum[i]);

       }
       console.log("Total is " + answer);

       if(answer === 25)
       {
        console.log("congrats you got the puzzle right! ");
        this.key.setAlpha(1);
       }
       else 
       {
        console.log("Yeah try again");
       }

       this.total = 0; // Reset total back to zero
       this.sum = []; // Clear the sum array

      }
    }
    setInteractive()
    {
      


    }
    
   
}