import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'
import { DOM } from 'phaser';

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  // addEventListener('keydown', (event) => {
  //   var code = event.code;
  //   console.log(code);
  //   if(code === 'KeyP' || code === 'Escape') Phaser.
  // })

  create() {
    new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)

    this.input.keyboard.on('keydown-W', () => {
      console.log('test')
    })
    //this.input.keyboard.on('keydown_W', this.loadMenu, this);
  }

  update() {
    this.fpsText.update()
  }

  loadMenu(event) {
    if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.S) {
      console.log('S was pressed');
    } else if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.W) {
      console.log('W was pressed');
    }
  }

}
