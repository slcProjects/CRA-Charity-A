export default class Game extends Phaser.Scene {
    fpsText
  private total : number;
  private sum : number[];
    constructor() {
      super({ key: 'MainGame' })

      this.total = 0;
      this.sum = [];
    }
    
    create()
    {
      let gameState = {
        buttons : [
          this.add.image(645, 360, 'Button1').setInteractive().on('pointerdown', ()=> {
            this.addToArray(1) 
          }),
          this.add.image(645, 460, 'Button2').setInteractive().on('pointerdown', ()=> {
            this.addToArray(2) 
          }),
          //this.add.image(685, 360, 'Button2').setInteractive(),
     
     
        ],
         map : new Map ([
          ['Button1', 1],
          ['Button2', 2]

        ])
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

       if(answer === 7)
       {
        console.log("congrats you got the puzzle right! ");
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