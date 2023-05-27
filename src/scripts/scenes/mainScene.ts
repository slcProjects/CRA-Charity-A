import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'
import { DOM } from 'phaser';

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

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

    this.input.keyboard.on('keydown-P', () => {
      this.scene.start('PauseScene')
    })

    this.input.keyboard.on('keydown-ESC', () => {
      this.scene.start('PauseScene')
    })
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
