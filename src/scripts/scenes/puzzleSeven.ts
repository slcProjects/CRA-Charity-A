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
      var scale = 1;
      var pieceSize = 64;
      var images = Array.from(Array(8), () => new Array(8));
      
      var offset = 10;
      var outlines = Array.from(Array(8), () => new Array(8));
      for(let x = 0; x < 8; x++){
        for(let y = 0; y < 8; y++){
          outlines[x][y] = this.add.rectangle(
            700 + y * pieceSize,
            200 + x * pieceSize,
            pieceSize,
            pieceSize,
            0x808080
          );
        }
      } 
              
      if(this.data.get('openedExit')){
          keyHolder.visible = true;
      }
     
            for(let x = 0; x < 8; x++){
              for(let y = 0; y < 8; y++){
                images[x][y] = this.add.image(300, 400, 'MainMenu').setScale(scale).setCrop(pieceSize * y, pieceSize * x, pieceSize, pieceSize);
                this.input.setHitAreaRectangle(images[x][y], pieceSize * y, pieceSize * x,pieceSize,pieceSize).setDraggable(images[x][y], true);
              }
            }

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', () =>
        {
          // in progress
        });
  }
}