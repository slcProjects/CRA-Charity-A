
import globalTimer from '../objects/globalTimer';
export default class Game extends Phaser.Scene {
public key1; 
 private counter: number = 0;
    constructor() {
        super({ key: 'MainGame' })
        
      }

/*pointerup: This event is triggered when a pointer (mouse button or touch) is released after being pressed down on
  a game object. It can be used to detect when the player stops clicking or touching the object.

pointerout: The pointerout event is triggered when the pointer moves out of a game object. It can be useful to
 track when the pointer leaves an object, such as when the player moves the cursor away from a button.

pointerover: The pointerover event is triggered when the pointer moves onto a game object. It can be used to 
  detect when the pointer enters an object, such as when the player hovers the cursor over a button.

*/
    create()
    {
      
      if (this.counter === 0)
      {
        globalTimer.startTimer();
        this.counter +=1;
        
      }
      
      else {
        console.log("U CAN'T ENTER")
      }
    
  
      const image = this.add.image(0,0,'lobby')
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
      this.input.keyboard?.on('keydown-ESC', this.goToOptionsScene, this);
      this.key1 = this.scene.get('puzzleOne').data.get('fireKey');

      if (this.data.get('antler') == null) { // initial false
        this.data.set('antler', false);
      }
        //Change antler to be with key2 from the second puzzle

        var left = this.add.image(50, 360, 'LeftArrow').setInteractive({ useHandCursor: true }).on('pointerdown', ()=> {
            this.scene.start('puzzle3-4');//This is meant to change pages
    
          });
    

          const puzzle1 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            280, 
            145, 
            
          );
         
          puzzle1.x = 780;
          puzzle1.y = 435;

          puzzle1.setInteractive({ useHandCursor: true });
          puzzle1.on('pointerup', () => {
            this.scene.start('puzzleOne');
          });

         
          puzzle1.on('pointerover', () => {
            image.setTexture('lobbyHF');
         })
   
         puzzle1.on('pointerout', () => { 
           image.setTexture('lobby');
         })

          const puzzle2 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            300,
            290
            
          );
          
          puzzle2.x = 370; //370
          puzzle2.y = 350; //350

          

          puzzle2.setInteractive({ useHandCursor: true });
          puzzle2.on('pointerup', () => {
            if(this.key1)
            { 
              this.scene.start('puzzleTwo');
            }
            
          });

          
          puzzle2.on('pointerover', () => {
            if(this.key1)
            {
            image.setTexture('lobbyH');
          }
          else{
            image.setTexture('lobbyHR');
          }
         })
   
         puzzle2.on('pointerout', () => { 
           image.setTexture('lobby');
         })

          
          
          
    
    
    
     
    
          left.setScale(2,2);
    
          left.on('pointerover', () => {
             left.setTexture('LeftArrowSelected');
          })
    
          left.on('pointerout', () => { 
            left.setTexture('LeftArrow');
          })
    
    
          var right = this.add.image(1230, 360, 'RightArrow').setInteractive({ useHandCursor: true }).on('pointerdown', ()=> {
            this.scene.start('puzzle5-6');//This is meant to change pages
    
          });
    
          right.setScale(2,2);
    
          right.on('pointerover', () => {
            right.setTexture('RightArrowSelected');
         })
    
         right.on('pointerout', () => { 
           right.setTexture('RightArrow');
         })
    
    }
  
  
   
    update(time, delta) {
      // Call the update function of GlobalTimer to update the timer
      globalTimer.update(time);
    }
    goToOptionsScene() {
      this.scene.pause();
      this.scene.start('Options', { fromScene: this.scene.key });
      console.log({fromScene: this.scene.key})
    }
}