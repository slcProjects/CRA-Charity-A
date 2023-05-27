
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
      this.cameras.main.centerX - (this.menuText.length * 10), 
      10, this.menuText, {
      fontSize: '32px',
      fontFamily: 'Arial',
      color: '#ffffff',
      backgroundColor: '#000000',
      fontStyle: 'bold',
    });
  }
  update() {
   
  }
}
