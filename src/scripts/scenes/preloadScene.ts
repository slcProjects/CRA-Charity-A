export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.image('StartGameEngButton', './assets/img/Start-Game-Eng.png')
    this.load.image('Button1', './assets/img/PZ1-1.png')
    this.load.image('Button2', './assets/img/PZ1-2.png')
    this.load.image('Button3', './assets/img/PZ1-3.png')
    this.load.image('Button4', './assets/img/PZ1-4.png')
    this.load.image('Button5', './assets/img/PZ1-5.png')
    this.load.image('Button6', './assets/img/PZ1-6.png')
    this.load.image('Button7', './assets/img/PZ1-7.png')
    this.load.image('Button8', './assets/img/PZ1-8.png')
    this.load.image('Button9', './assets/img/PZ1-9.png')
    this.load.image('MainMenu','./assets/img/MainMenu.jpg')
    this.load.image('Key','./assets/img/PZ1-Key.png')
  }

  create() {
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
