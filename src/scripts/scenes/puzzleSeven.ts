import { GameObjects } from "phaser";

export default class Puzzle7 extends Phaser.Scene {
    
constructor() {
    super({ key: 'puzzleSeven' })
  }
  create(){
    var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
        this.scene.start('endRoom');//This is meant to change pages
      });
      if(this.data.get('openedExit') == null){
      this.data.set('openedExit', false);
      }

      let keyHolder = this.add.text(100, 70, 'The exit has opened', {color: '#ff0000', fontStyle: 'bold', backgroundColor: 'black'});
      keyHolder.visible = false;
           
      if(this.data.get('openedExit')){
        keyHolder.visible = true;
    }

      var scale = .6;
      var pieceSize = 64 * scale;
      var offset = 10;
      const outlines : GameObjects.Rectangle[] = [];
      const images : GameObjects.Image[] = [];

      for(let x = 0; x < 8; x++){
        for(let y = 0; y < 8; y++){
          var  outline = this.add.rectangle(
            800+ y*pieceSize,
            300+ x*pieceSize,
            pieceSize,
            pieceSize,
            0x808080
          );
          outlines.push(outline);
          let image = this.add.image(300, 537, 'MainMenu').
                      setCrop(pieceSize * y, pieceSize * x, pieceSize, pieceSize).setDepth(1).
                      setInteractive(new Phaser.Geom.Rectangle(pieceSize * y, pieceSize * x,pieceSize,pieceSize), Phaser.Geom.Rectangle.Contains);
          
          this.input.setDraggable(image, true);
          images.push(image);
        }
      }
        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', (gameObject) =>
        {
          console.log(images.at(0)?.x + ", " + images.at(0)?.y);
              console.log(outlines.at(0)?.x + ", " + outlines.at(0)?.y);
              console.log(images.at(7)?.x + ", " + images.at(7)?.y);
              console.log(outlines.at(7)?.x + ", " + outlines.at(7)?.y);
              console.log(images.at(56)?.x + ", " + images.at(56)?.y);
              console.log(outlines.at(56)?.x + ", " + outlines.at(56)?.y);
              console.log(images.at(63)?.x + ", " + images.at(63)?.y);
              console.log(outlines.at(63)?.x + ", " + outlines.at(63)?.y);
            
          for(let index = 0; index < images.length; index++)
          {
            if((images.at(index)!.x >= 1036.5 - offset && images.at(index)!.x <= 1036.5 + offset) &&
               (images.at(index)!.y >= 537 - offset && images.at(index)!.y <= 537 + offset)){

                images.at(index)?.setY(537);
                images.at(index)?.setX(1036.5);
                images.at(index)!.disableInteractive();
                
               }
          }
            
        });
  }
}