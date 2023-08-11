import {textStyle} from '../objects/fpsStyle';


export default class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'EndScene' })

     
    }
    
    create()
    {
      const image = this.add.image(0, 0, 'endingImage');
       
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
        const content = [
            'You have escaped the old winter cabin in the Canadian wilderness,',
            'you explored its secrets. As you step outside onto the snow, ',
            'you feel a sense of accomplishment as you have escaped the baffling house.',
            'Now you are on a journey to tell your friends about what has occured.',
            '                                                             ',
            '                                                             ',
            '                                                             ',
            '                                                             ',
            'Created by Marco De Melo and Riley Lawrence-Nebesnuik'
            //Possibly Changed, the story
        ];
          var text = this.add.text(this.cameras.main.centerX -135, this.cameras.main.centerY -330, content, textStyle);
          text.setColor('fad643');
          text.setLineSpacing(17);
          text.setScale(.75);

        const Continue = this.add.image(1000,680,'Continue').setInteractive({ useHandCursor: true });

        Continue.on('pointerdown', this.buttonClicked, this);
  

          
    }
    
    buttonClicked()
    {
      this.scene.start('MainScene');
    }
}
