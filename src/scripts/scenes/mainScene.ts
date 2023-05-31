
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
       const image = this.add.image(0, 0, 'MainMenu');
       
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
    
    

    /*
    For the Background Image, Use to scale it

    */

    const StartGameEngButton = this.add.image(645, 360, 'StartGameEngButton').setInteractive();
   
    StartGameEngButton.on('pointerdown', this.buttonClicked, this);
  }

  buttonClicked()
  {
    this.scene.start('MainGame');
  }
  update() {
   
  }
}
