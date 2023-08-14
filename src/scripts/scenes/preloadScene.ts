import VolumeManager from '../objects/VolumeManager';
export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.image('EnglishB','./assets/img/englishButton.png')
    this.load.image('FrenchB','./assets/img/frenchButton.png')
    this.load.image('End','./assets/img/endingImage.png')
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
    this.load.image('Riddle1Fr','./assets/img/Riddle1Fr.png')
    this.load.image('Riddle2Fr','./assets/img/Riddle2Fr.png')
    this.load.image('bottleA','./assets/img/bottleA.png')
    this.load.image('bottleB','./assets/img/bottleB.png')
    this.load.image('bottleC','./assets/img/bottleC.png')
    this.load.image('lobby','./assets/img/Lobby.png')
    this.load.image('lobbyH','./assets/img/LobbyHighlight.png')
    this.load.image('lobbyHR','./assets/img/LobbyHighlightR.png')
    this.load.image('lobbyHF','./assets/img/LobbyHF.png')
    this.load.image('FirePit','./assets/img/FirePit.png')
    this.load.image('leftArrowHint','./assets/img/leftArrowHint.png')
    this.load.image('rightArrowHint','./assets/img/rightArrowHint.png')
    this.load.image('closeButton','./assets/img/closeButton.png');
    this.load.image('closeButton','./assets/img/closeButton.png')
    this.load.image('hintsButton','/assets/img/hintsButton.png')
    this.load.image('StoryImage','/assets/img/StoryImage.png')
    this.load.image('Books','/assets/img/BookShelf.png')
    this.load.image('lobby3-4','/assets/img/Lobby3-4.png')
    this.load.image('Kitchen','/assets/img/Kitchen.png');
    this.load.image('KitchenH','/assets/img/KitchenH.png');
    this.load.image('KitchenHR','/assets/img/KitchenHR.png');
    this.load.image('KitchenM','/assets/img/KitchenM.png');
    this.load.image('lobby3-4Cannoe','/assets/img/Lobby3-4Cannoe.png')
    this.load.image('lobby3-4CannoeR','/assets/img/Lobby3-4CannoeR.png')
    this.load.image('lobby3-4Antlers','/assets/img/Lobby3-4Antlers.png')
    this.load.image('Options', '/assets/img/options.png')
    this.load.image('FinalKey','./assets/img/FinalKey.png')
    this.load.image('Paper','./assets/img/Paper.png')
    this.load.image('PaperH','./assets/img/PaperH.png')
    this.load.image('moose','/assets/img/Moose.png')
    this.load.image('canoe','/assets/img/Canoe.png')
    this.load.image('flag','/assets/img/flag.png')
<<<<<<< HEAD
    this.load.image('endingImage','/assets/img/endingImage.png')
=======
    this.load.image('Enter','./assets/img/Enter.png')
>>>>>>> Marco
    this.load.image('Pz2PImg1', '/assets/img/Pz2Img1.png')
    this.load.image('Pz2PImg2', '/assets/img/Pz2Img2.png')
    this.load.image('Pz2PImg3', '/assets/img/Pz2Img3.png')
    this.load.image('Pz2PImg4', '/assets/img/Pz2Img4.png')
    this.load.image('Pz2PImg5', '/assets/img/Pz2Img5.png')
    this.load.image('Pz2PImg6', '/assets/img/Pz2Img6.png')
    for (var i = 1; i <= 6; i++) {
      this.load.audio('Song' + i, '/assets/Music/Song' + i + '.mp3');
  }
  }

  create() {
    this.playRandomSong();

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
  playRandomSong() {
    const currentSongIndex = Phaser.Math.Between(1, 6);
    const music = this.sound.add('Song' + currentSongIndex, {
        volume: VolumeManager.getVolume() / 100,
        loop: true
    });
    music.play();


    
}

  
}
