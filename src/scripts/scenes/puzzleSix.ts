export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'puzzleSix' })
      }

      create()
      {
        var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
            this.scene.start('puzzle5-6');//This is meant to change pages
    
          });
      }
    }