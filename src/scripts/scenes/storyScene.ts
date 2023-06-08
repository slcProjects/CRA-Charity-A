import {textStyle} from '../objects/fpsStyle';


export default class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'storyScene' })

     
    }
    
    create()
    {
        
          var text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Temporary text till i figure out the story', textStyle);
        text.setOrigin(0.5);

        const Continue = this.add.image(1165,680,'Continue').setInteractive();

        Continue.on('pointerdown', this.buttonClicked, this);
  

          
    }
    
    buttonClicked()
    {
      this.scene.start('MainGame');
    }
}