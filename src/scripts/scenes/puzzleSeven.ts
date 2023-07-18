import { GameObjects } from "phaser";
import { createHintScene } from '../objects/hints'
export default class Puzzle7 extends Phaser.Scene {
    
constructor() {
    super({ key: 'puzzleSeven' })
  }
  create(){
    const image = this.add.image(0,0,'canoe')
    image.setOrigin(0.5);
    image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

    var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
        this.scene.start('puzzle3-4');//This is meant to change pages
      });
      if(this.data.get('openedExit') == null){
      this.data.set('openedExit', false);
      }

      var hints = [
        "Hint 1: This is the first hint.",
        "Hint 2: This is the second hint.",
        "Hint 3: This is the third hint."
      ];

      const hintScene = createHintScene.call(this, hints);
    hintScene.call(this);

      this.add.text(400, 70, 'Finish Puzzle', {color: '#ff0000', fontStyle: 'bold', backgroundColor: 'black'}).setInteractive().on('pointerdown', ()=> {
        this.data.set('openedExit', true);

        for(let index = 0; index < images.length; index++)
          {
                images.at(index)?.setY(298);
                images.at(index)?.setX(1068);
                images.at(index)!.disableInteractive();
          }

      });
      

      var scale = .4;
      var pieceSize = 45;
      var offset = 5;
      const outlines : GameObjects.Rectangle[] = [];
      const images : GameObjects.Image[] = [];

      for(let x = 0; x < 4; x++){
        for(let y = 0; y < 4; y++){
          var  outline = this.add.rectangle(
            1000+ y*pieceSize,
            230+ x*pieceSize,
            pieceSize,
            pieceSize,
            0x808080
          );
          var value = Phaser.Math.Between(-150, 150);
          outlines.push(outline);
          let image = this.add.image(400 + value, 537 + value, 'flag').
                      setCrop(pieceSize * y, pieceSize * x, pieceSize, pieceSize).setDepth(1).
                      setInteractive(new Phaser.Geom.Rectangle(pieceSize * y, pieceSize * x,pieceSize,pieceSize), Phaser.Geom.Rectangle.Contains);
          
          this.input.setDraggable(image, true);
          images.push(image);
        }

        if(this.data.get('openedExit')){

  
          for(let index = 0; index < images.length; index++)
          {
                images.at(index)?.setY(298);
                images.at(index)?.setX(1068);
                images.at(index)!.disableInteractive();
          }
      }
      }
        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', (gameObject) =>
        {
          let count = 0;
          for(let index = 0; index < images.length; index++)
          {
            if((images.at(index)!.x >= 1068 - offset && images.at(index)!.x <= 1068 + offset) &&
               (images.at(index)!.y >= 298 - offset && images.at(index)!.y <= 298 + offset)){

                images.at(index)?.setY(298);
                images.at(index)?.setX(1068);
                images.at(index)!.disableInteractive();
                count++;
               }
          }
          if(count >=16){
            this.data.set('openedExit', true);
    
          }
            
        });
  }
}