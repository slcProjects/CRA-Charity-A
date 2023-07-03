export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'puzzle3-4' })
      }


    create()
    {
     
    
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
          
          const puzzle7 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            200,
            200,
            0x000000
          );
          puzzle7.x = 900;
          puzzle7.y = 350;
          puzzle7.setInteractive();
          puzzle7.on('pointerup', () => {
            this.scene.start('puzzleSeven');
          });

          
    
          var right = this.add.image(1230, 360, 'RightArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('MainGame');//This is meant to change pages
    
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
