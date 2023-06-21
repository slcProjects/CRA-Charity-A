export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'MainGame' })
      }


    create()
    {
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