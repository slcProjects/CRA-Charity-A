export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'puzzle3-4' })
      }


    create()
    {
      const image = this.add.image(0,0,'lobby3-4')
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
        

        

    
          const puzzle7 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            660,
            100,
            
          );
          puzzle7.x = 630;
          puzzle7.y = 520;
          
          puzzle7.setInteractive();
          puzzle7.on('pointerup', () => {
            this.scene.start('puzzleSeven');
          });
          
          puzzle7.on('pointerover', () => {
            image.setTexture('lobby3-4Cannoe');
         })
   
         puzzle7.on('pointerout', () => { 
           image.setTexture('lobby3-4');
         })
          
          const puzzle3 = this.add.rectangle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            285,
            215,
            
          );
          puzzle3.x = 1020;
          puzzle3.y = 350;
         
          puzzle3.setInteractive();
          puzzle3.on('pointerup', () => {
            this.scene.start('puzzleThree');
          });

          puzzle3.on('pointerover', () => {
            image.setTexture('lobby3-4Antlers');
         })
   
         puzzle3.on('pointerout', () => { 
           image.setTexture('lobby3-4');
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
