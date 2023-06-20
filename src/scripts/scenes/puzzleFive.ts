export default class Game extends Phaser.Scene {
    constructor() {
      super({ key: 'puzzleFive' });
    }
  
    create() {
        //Make it so the verification actually works, probably change how it works. \
        //Idea 1: Make it so there's boxes specifically where they can go but u can drag it wherever, whatever image
        // is in the box at the time will be replaced by the image just picked up and it'll go in that one's box
        var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
            this.scene.start('puzzle5-6');//This is meant to change pages
    
          });
      const table = this.add.image(400, 480, 'table');
      const key5 = this.add.image(783, 500, 'Key5');
      key5.setAlpha(0);
  
      const bottleA = this.add.image(315, 300, 'bottleA').setInteractive({ draggable: true });
      const bottleB = this.add.image(425, 300, 'bottleB').setInteractive({ draggable: true });
      const bottleC = this.add.image(535, 300, 'bottleC').setInteractive({ draggable: true });
  
      bottleA.setScale(0.16);
      bottleB.setScale(0.16);
      bottleC.setScale(0.16);
  
      const tableBounds = table.getBounds();
  
      const correctOrder = ['C', 'A', 'B'];
      const droppedBottles = {};
  
      const checkOrder = () => {
        const currentOrder = Object.keys(droppedBottles).sort((a, b) => {
          const indexA = correctOrder.indexOf(a);
          const indexB = correctOrder.indexOf(b);
          return indexA - indexB;
        });
  
        if (currentOrder.join('') === correctOrder.join('')) {
          console.log('Unlock the next stage!');
          key5.setAlpha(1);
        } else {
          console.log('Incorrect order, try again!');
        }
      };
  
      bottleA.setData('key', 'A');
      bottleB.setData('key', 'B');
      bottleC.setData('key', 'C');
  
      this.input.on('dragstart', (pointer, gameObject) => {
        gameObject.setTint(0xaaaaaa);
      });
  
      this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        const minX = tableBounds.left + 50;
        const maxX = tableBounds.right - 50;
  
        gameObject.x = Phaser.Math.Clamp(dragX, minX, maxX);
        gameObject.y = dragY;
      });
  
      this.input.on('dragend', (pointer, gameObject) => {
        gameObject.clearTint();
        gameObject.x = Math.floor(gameObject.x / 100) * 100 + 50;
        gameObject.y = 300;
  
        if (gameObject.input.dragged && !gameObject.input.target) {
          delete droppedBottles[gameObject.getData('key')];
        } else {
          droppedBottles[gameObject.getData('key')] = gameObject;
          checkOrder();
        }
      });
    }
  }
  