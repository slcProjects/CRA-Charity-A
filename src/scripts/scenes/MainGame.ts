export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'MainGame' })
      }

//pointerDown is when user clicks on it
//pointerup is when user clicks on it
//pointerover is when user hovers it
//pointerout is when user isn't hovered over it
    create()
    {
        var left = this.add.image(50, 360, 'LeftArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start();//This is meant to change pages
    
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
            this.scene.start();//This is meant to change pages
    
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