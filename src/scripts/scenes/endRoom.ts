export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'endRoom' })
      }


    create()
    {
        var left = this.add.image(50, 360, 'LeftArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('puzzle5-6');//This is meant to change pages
    
          });
    
          const puzzle7 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            200,
            200,
            0x000000
          );
          puzzle7.x = 350;
          puzzle7.y = 350;
          let keyHolder = this.add.text(10, 70, 'This is end room', {color: '#ff0000', fontStyle: 'bold', backgroundColor: 'black'});
          keyHolder.setOrigin(0);
          puzzle7.setInteractive();
          puzzle7.on('pointerup', () => {
            this.scene.start('puzzleSeven');
          });
          
    
          left.setScale(2,2);
    
          left.on('pointerover', () => {
             left.setTexture('LeftArrowSelected');
          })
    
          left.on('pointerout', () => { 
            left.setTexture('LeftArrow');
          })
    
    
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
