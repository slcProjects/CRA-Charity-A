import {textStyle} from '../objects/fpsStyle';


export default class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'storyScene' })

     
    }
    
    create()
    {
      const image = this.add.image(0, 0, 'StoryImage');
      this.input.keyboard.on('keydown-ESC', this.goToOptionsScene, this);
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
          var text = this.add.text(this.cameras.main.centerX - 500, this.cameras.main.centerY - 100, content, textStyle);
        const Continue = this.add.image(1165,680,'Continue').setInteractive({ useHandCursor: true });

        Continue.on('pointerdown', this.buttonClicked, this);
  

          
    }
    goToOptionsScene() {
      this.scene.pause();
      this.scene.start('Options', { fromScene: this.scene.key });
      console.log({fromScene: this.scene.key})
    }
    buttonClicked()
    {
      this.scene.start('MainGame');
    }
}
