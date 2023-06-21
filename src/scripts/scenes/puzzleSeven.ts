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
      var scale = .8;
      var offset = 10;
      let image = this.add.image(300, 300, 'MainMenu').setScale(scale).setInteractive();
      image.depth = 1;
            const outline = this.add.rectangle(
                this.cameras.main.width*2/3,
                this.cameras.main.height*2/3,
                image.width  * scale,
                image.height * scale,
                0x808080
              );
      

      if(this.data.get('openedExit')){
          keyHolder.visible = true;
          image.setPosition(outline.x,outline.y)
          image.disableInteractive();
      
      }
     
            
      this.input.setDraggable(image);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', () =>
        {

            if((image.x >= (outline.x - offset) && image.x <= (outline.x + offset)) && 
               (image.y >= (outline.y - offset) && image.y <= (outline.y + offset)))
               {
                image.x = outline.x;
                image.y = outline.y;
                image.disableInteractive();
                keyHolder.visible = true;
                this.data.set('openedExit', true);
               }

        });
  }
}