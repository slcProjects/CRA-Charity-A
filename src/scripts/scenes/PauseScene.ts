
import FpsText from '../objects/fpsText'

export default class PauseScene extends Phaser.Scene {
  DEFAULT_WIDTH = 1280
  DEFAULT_HEIGHT = 720

  menuText = 'Pause Menu';
  fpsText

  constructor() {
    super({ key: 'PauseScene' })
  }

  create() {
    const text = this.add.text(
      this.cameras.main.worldView.x + this.DEFAULT_WIDTH / 2 - (this.menuText.length / 2 - (this.menuText.length / 2)), 
      10, this.menuText, {
      fontSize: '32px',
      fontFamily: 'Arial',
      color: '#ffffff',
      backgroundColor: '#000000',
      fontStyle: 'bold',
    });

    //text.text = "Pause Menu"; 
    //Phaser.Display.Align.In.Center(text);
  }
  update() {
   
  }
}
