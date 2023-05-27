
import FpsText from '../objects/fpsText'

export default class PauseScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'PauseScene' })
  }

  create() {
    const text = this.add.text(10, 10, 'Hello, Phaser!', {
      fontSize: '32px',
      fontFamily: 'Arial',
      color: '#ffffff',
      backgroundColor: '#000000',
      fontStyle: 'bold',
    });

    text.text = "This is the Main Menu"; 
  }
  update() {
   
  }
}
