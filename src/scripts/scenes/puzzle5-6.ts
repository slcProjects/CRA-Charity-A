export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'puzzle5-6' })
      }


      create()
      {
        const image = this.add.image(0,0,'Kitchen')
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
        
        var left = this.add.image(50, 360, 'LeftArrow').setInteractive().on('pointerdown', ()=> {
            this.scene.start('MainGame');//This is meant to change pages
    
          });

          const puzzle5 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            250,
           100,
            
          );
          puzzle5.x = 510;
          puzzle5.y = 285;
          

          puzzle5.setInteractive();
          puzzle5.on('pointerup', () => {
            this.scene.start('puzzleFive');
          });

          
          puzzle5.on('pointerover', () => {
            image.setTexture('KitchenH');
         })
   
         puzzle5.on('pointerout', () => { 
           image.setTexture('Kitchen');
         })
          
         
          left.setScale(2,2);
    
          left.on('pointerover', () => {
             left.setTexture('LeftArrowSelected');
          })
    
          left.on('pointerout', () => { 
            left.setTexture('LeftArrow');
          })

          
      }
    }