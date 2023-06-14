import {textStyle} from '../objects/fpsStyle';


export default class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'storyScene' })

     
    }
    
    create()
    {
        
        const content = [
            'You finally arrive at your destination, a charming log cabin in a snowy forest.',
            'Tonight you\'ll get a magic view if the northern lights adding a touch of enchantment to scenery.',
            'But right now the temperature is freezing so you decide to head on into your cabin for warmth.',
            'Inside a cozy log cabin in the heart of the Canadian wilderness. The room is adorned with',
            'maple-leaf decorations, wildlife paintings, and rustic furniture. Snowflakes gently fall',
            'outside the window, creating a serene atmosphere. You start to relax when you here a loud',
            'THUD outside the cabin. When you go to investigate you noticed that the doors and windows ',
            'wont open. You decide it is best to look for a way out that does not destory the cabin.'
        ];
          var text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, content, textStyle);
        text.setOrigin(0.5);

        const Continue = this.add.image(1165,680,'Continue').setInteractive();

        Continue.on('pointerdown', this.buttonClicked, this);
  

          
    }
    
    buttonClicked()
    {
      this.scene.start('MainGame');
    }
}
