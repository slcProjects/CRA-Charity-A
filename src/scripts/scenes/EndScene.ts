import {textStyle} from '../objects/fpsStyle';


export default class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'storyScene' })

     
    }
    
    create()
    {
      const image = this.add.image(0, 0, 'MainMenu');
       
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
        const content = [
            'In the remote Canadian wilderness, you stand before an old winter cabin,',
            'its mystique beckoning you to explore its secrets. As you step inside, ',
            'seeking adventure, you unwittingly trigger a mechanism that seals you inside, ',
            'leaving you trapped within its icy embrace. With the fire slowly dwindling, ',
            'casting flickering shadows across the room, you realize that time is against you.'
            //Possibly Changed, the story
        ];
          var text = this.add.text(this.cameras.main.centerX -135, this.cameras.main.centerY -330, content, textStyle);
          text.setColor('fad643');
          text.setLineSpacing(17);
          text.setScale(.75);

        const Continue = this.add.image(1165,680,'Continue').setInteractive();

        Continue.on('pointerdown', this.buttonClicked, this);
  

          
    }
    
    buttonClicked()
    {
      this.scene.start('MainScene');
    }
}
