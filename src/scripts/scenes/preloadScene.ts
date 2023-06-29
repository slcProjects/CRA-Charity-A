export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.image('StartGameEngButton', './assets/img/Start-Game-Eng.png')
    this.load.image('MainMenu','./assets/img/MainMenu.jpg')
    this.load.image('Key1','./assets/img/PZ1-Key.png')
    this.load.image('Key2','./assets/img/PZ2-Key.png')
    this.load.image('LeftArrow', './assets/img/LeftArrow.png')
    this.load.image('LeftArrowSelected', './assets/img/LeftArrowSelected.png')
    this.load.image('RightArrow', './assets/img/RightArrow.png')
    this.load.image('RightArrowSelected', './assets/img/RightArrowSelected.png')
    this.load.image('Continue','./assets/img/Continue.png')
    this.load.image('Return','./assets/img/return.png')
    this.load.image('Riddle2','./assets/img/Riddle2.png')
    this.load.image('Riddle1','./assets/img/Riddle1.png')
    this.load.image('bottleA','./assets/img/bottleA.png')
    this.load.image('bottleB','./assets/img/bottleB.png')
    this.load.image('bottleC','./assets/img/bottleC.png')
    this.load.image('table','./assets/img/Table.png')
    this.load.image('Key5','./assets/img/northKey.png')
    this.load.image('lobby','./assets/img/Lobby.png')
    this.load.image('lobbyH','./assets/img/LobbyHighlight.png')
    this.load.image('lobbyHF','./assets/img/LobbyHF.png')
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
