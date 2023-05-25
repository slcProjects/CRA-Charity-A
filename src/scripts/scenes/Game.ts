export default class Game extends Phaser.Scene {
    fpsText
  
    constructor() {
      super({ key: 'MainGame' })
    }

    create()
    {
        const text = this.add.text(10, 10, 'Hello, Phaser!', {
            fontSize: '32px',
            fontFamily: 'Arial',
            color: '#ffffff',
            backgroundColor: '#000000',
            fontStyle: 'bold',
          });

          text.text = "This is the Main Game"; 
    }
}