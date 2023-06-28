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

        var left = this.add.image(50, 360, 'LeftArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('endRoom');//This is meant to change pages
    
          });
    

          const puzzle1 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            200,
            200,
            0x000000
          );
          puzzle1.x = 350;
          puzzle1.y = 350;

          puzzle1.setInteractive();
          puzzle1.on('pointerup', () => {
            this.scene.start('puzzleOne');
          });
          
          const puzzle2 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            200,
            200,
            0x000000
          );
          puzzle2.x = 950;
          puzzle2.y = 350;

          puzzle2.setInteractive();
          puzzle2.on('pointerup', () => {
            this.scene.start('puzzleTwo');
          });

            
          left.setScale(2,2);
    
          left.on('pointerover', () => {
             left.setTexture('LeftArrowSelected');
          })
    
          left.on('pointerout', () => { 
            left.setTexture('LeftArrow');
          })
    
    
          var right = this.add.image(1230, 360, 'RightArrow').setInteractive().on('pointerdown', ()=> {
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
}