import { storyStyle } from '../objects/fpsStyle';
import MainScene from './mainScene'; // Update the import path if needed

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'storyScene' });
  }

  create() {
    const image = this.add.image(0, 0, 'StoryImage');
    this.input.keyboard?.on('keydown-ESC', this.goToOptionsScene, this);
    image.setOrigin(0.5);
    image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

    // Define content in both English and French
    const contentEnglish = [
      'In the remote Canadian wilderness, you stand before an old winter cabin,',
      'its mystique beckoning you to explore its secrets. As you step inside, ',
      'seeking adventure, you unwittingly trigger a mechanism that seals you inside, ',
      'leaving you trapped within its icy embrace. With the fire slowly dwindling, ',
      'casting flickering shadows across the room, you realize that time is against you.'
    ];

    const contentFrench = [
      'Au cœur de la nature sauvage canadienne, vous vous tenez devant une vieille cabane d\'hiver.',
      'Son apparence mystique vous invite à explorer ses secrets. À votre entrée, vous déclenchez ',
      'involontairement un mécanisme vous enfermant à l\'intérieur vous laissant piégé dans son antre glacée. ',
      'Avec le feu diminuant lentement et projetant des ombres vacillantes dans la pièce.',
      'vous réalisez que le temps joue contre vous. '
    ];

    const content = MainScene.selectedLanguage === 'English' ? contentEnglish : contentFrench;

    // Adjust the X and Y coordinates for the text based on the selected language
    const textX = MainScene.selectedLanguage === 'English' ? this.cameras.main.centerX - 620 : this.cameras.main.centerX - 620;
    const textY = this.cameras.main.centerY + 0; // Adjusted the Y coordinate
    const yOffset = -100; // Adjust the Y offset as needed|

    const graphics = this.add.graphics();
    graphics.fillStyle(0xffffff, 1); // 0xffffff is white, and 1 is full opacity
    if(MainScene.selectedLanguage === 'English')
    {
      graphics.fillRect(textX - 10, textY + yOffset - 10, 850, 140);
    }
    else if ( MainScene.selectedLanguage === 'French')
    {
      graphics.fillRect(textX - 10, textY + yOffset - 10, 1100, 140);
    }
    
  
 
    // Make sure the text is displayed above the white background
    
    graphics.setDepth(0); // Lower depth value ensures it's behind the text
    var text = this.add.text(textX, textY + yOffset, content, storyStyle);
    if(MainScene.selectedLanguage === 'English')
    {
      const Continue = this.add.image(1165, 680, 'Continue').setInteractive();
      Continue.on('pointerdown', this.buttonClicked, this);
    }
    else if (MainScene.selectedLanguage==='French')
    {
      const Continue = this.add.image(1165, 680, 'Continuer').setInteractive();
      Continue.on('pointerdown', this.buttonClicked, this);
    }
    

  }

  goToOptionsScene() {
    this.scene.pause();
    this.scene.start('Options', { fromScene: this.scene.key });
    console.log({ fromScene: this.scene.key });
  }

  buttonClicked() {
    this.scene.start('MainGame');
  }
}
