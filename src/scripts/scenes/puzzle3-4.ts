export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'puzzle3-4' })
      }


    create()
    {
        var left = this.add.image(50, 360, 'LeftArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('MainGame');//This is meant to change pages
    
          });
    

          const puzzle3 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            200,
            200,
            0x000000
          );
          puzzle3.x = 350;
          puzzle3.y = 350;

          puzzle3.setInteractive();
          puzzle3.on('pointerup', () => {
            this.scene.start('puzzleThree');
          });
          
    
          left.setScale(2,2);
    
          left.on('pointerover', () => {
             left.setTexture('LeftArrowSelected');
          })
    
          left.on('pointerout', () => { 
            left.setTexture('LeftArrow');
          })
    
    
          var right = this.add.image(1230, 360, 'RightArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('endRoom');//This is meant to change pages
    
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
