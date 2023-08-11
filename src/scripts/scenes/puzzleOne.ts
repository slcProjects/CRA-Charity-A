import GlobalTimer from '../objects/globalTimer';

import { createHintScene } from '../objects/hints'
export default class Puzzle1 extends Phaser.Scene {
  private code ;
 private buttonsPressed 
  private key;
  private correctCode;
    constructor() {
      super({ key: 'puzzleOne' })

       this.code = '';
        this.buttonsPressed = 0;
        this.correctCode = '5839'
    }
    create()
    {
      const image = this.add.image(0,0,'FirePit')
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
      
      var hints = [
        "Hint 1: Try reading the paper.",
        "Hint 2: Read the paper closely it might be helpful.",
        "Hint 3: It seems the code is a 4 number combinations."
      ];

      const hintScene = createHintScene.call(this, hints);
    hintScene.call(this);
      this.key = this.add.image(200, 200, 'Key1');
      this.key.setScale(0.1,0.1);
      this.key.setAlpha(0); //Hides image
      this.key.setInteractive({ useHandCursor: true });
        const buttons = [] as Phaser.GameObjects.Text[];
        for (let i = 1; i <= 9; i++) {
           const button = this.add.text(170 + ((i - 1) % 3) * 100, 80 + Math.floor((i - 1) / 3) * 80, i.toString(), { fontFamily: 'Arial', fontSize: '32px', color: '#000000' });
            button.setOrigin(0.5);
            button.setInteractive({ useHandCursor: true });
            button.on('pointerup', () => {
                this.onButtonPress(button);
            });
            buttons.push(button);
        }
        const shiftAmount = 100; // Adjust the amount by which you want to shift the buttons
        
        buttons.forEach((button) => {
            button.x += shiftAmount;
        });
    
        var Return = this.add.image(95, 40, 'Return').setInteractive({ useHandCursor: true }).on('pointerdown', ()=> {
          this.scene.start('MainGame');//This is meant to change pages
  
        });
        this.key.on('pointerdown', ()=> { 
          this.key.setAlpha(0);
        });

        if(this.data.get('fireKey') == true)
        {
          buttons.forEach((button) => {
            this.disableButton(button);
          });
        }

        var Paper = this.add.image(1150, 500, 'Paper').setInteractive({ useHandCursor: true }).on('pointerdown', ()=> {
          this.scene.start('paperScene');//This is meant to change pages
  
        });
  
        Paper.setScale(0.35);
  
        Paper.on('pointerover', () => {
          Paper.setTexture('PaperH');
       })
  
       Paper.on('pointerout', () => { 
        Paper.setTexture('Paper');
       })
      
        this.input.keyboard.on('keydown-ESC', this.goToOptionsScene, this);
      
    
     
    }

   
    onButtonPress(button) {
      
      this.buttonsPressed++;
      this.code += button.text;
      console.log(button.text);
      this.disableButton(button);
      if (this.buttonsPressed === 4) {
          
          if(this.code === this.correctCode)
          {
            this.key.setAlpha(1);
            this.data.set('fireKey', true);
          }
          else{
        
             
            this.resetButtons();

          }
      }
     
  }
  update(time, delta) {
    // Call the update function of GlobalTimer to update the timer
    GlobalTimer.update(time);
  }
  disableButton(button) {
    button.disableInteractive();
    button.setAlpha(0.5);
}

enableButton(button) {
    button.setInteractive({ useHandCursor: true });
    button.setAlpha(1);
}

resetButtons() {
 
    const buttons = this.children.getAll();
    buttons.forEach((button) => {
        this.enableButton(button);
    });
    this.buttonsPressed = 0;
    this.code = '';
    this.key.setAlpha(0);
}
goToOptionsScene() {
  this.scene.pause();
  this.scene.start('Options', { fromScene: this.scene.key });
  console.log({fromScene: this.scene.key})
}
    
   
}