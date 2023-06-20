export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'puzzle5-6' })
      }


      create()
      {
        var left = this.add.image(50, 360, 'LeftArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('MainGame');//This is meant to change pages
    
          });

          const puzzle5 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            200,
            200,
            0x000000
          );
          puzzle5.x = 350;
          puzzle5.y = 350;

          puzzle5.setInteractive();
          puzzle5.on('pointerup', () => {
            this.scene.start('puzzleFive');
          });
          
          const puzzle6 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            200,
            200,
            0x000000
          );
          puzzle6.x = 950;
          puzzle6.y = 350;

          puzzle6.setInteractive();
          puzzle6.on('pointerup', () => {
            this.scene.start('puzzleSix');
          });
    
          left.setScale(2,2);
    
          left.on('pointerover', () => {
             left.setTexture('LeftArrowSelected');
          })
    
          left.on('pointerout', () => { 
            left.setTexture('LeftArrow');
          })
      }
    }