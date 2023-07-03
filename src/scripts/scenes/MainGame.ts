export default class Game extends Phaser.Scene {
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

      const image = this.add.image(0,0,'lobby')
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
      
      if (this.data.get('antler') == null){ // inital false
        this.data.set('antler', false)
        }
        //Change antler to be with key2 from the second puzzle

        var left = this.add.image(50, 360, 'LeftArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('endRoom');//This is meant to change pages
    
          });
    

          const puzzle1 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            280, 
            145, 
            
          );
          puzzle1.setStrokeStyle(2, 0x000000);
          puzzle1.x = 780;
          puzzle1.y = 435;

          puzzle1.setInteractive();
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
          puzzle2.setStrokeStyle(2, 0x000000);
          puzzle2.x = 370; //370
          puzzle2.y = 350; //350

          

          puzzle2.setInteractive();
          puzzle2.on('pointerup', () => {
            this.scene.start('puzzleTwo');
          });

          
          puzzle2.on('pointerover', () => {
            image.setTexture('lobbyH');
         })
   
         puzzle2.on('pointerout', () => { 
           image.setTexture('lobby');
         })

          
          let keyHolder = this.add.text(10, 70, 'I have the key', {color: '#ff0000', fontStyle: 'bold', backgroundColor: 'black'});
          keyHolder.setOrigin(0);
          keyHolder.setInteractive();
          keyHolder.on('pointerdown', () => {
          this.data.set('antler', true)
         });
          
    
    
    
     
    
          left.setScale(2,2);
    
          left.on('pointerover', () => {
             left.setTexture('LeftArrowSelected');
          })
    
          left.on('pointerout', () => { 
            left.setTexture('LeftArrow');
          })
    
    
          var right = this.add.image(1230, 360, 'RightArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('puzzle3-4');//This is meant to change pages
    
          });
    
          right.setScale(2,2);
    
          right.on('pointerover', () => {
            right.setTexture('RightArrowSelected');
         })
    
         right.on('pointerout', () => { 
           right.setTexture('RightArrow');
         })
    
    }
}