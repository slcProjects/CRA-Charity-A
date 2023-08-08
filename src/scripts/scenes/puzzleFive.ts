import { createHintScene } from '../objects/hints'
export default class Game extends Phaser.Scene {
  private showBottles;
  constructor() {
    super({ key: 'puzzleFive' });
  }

  create() {
    var hints = [
      "Hint 1: This is the first hint.",
      "Hint 2: This is the second hint.",
      "Hint 3: This is the third hint."
    ];

    const hintScene = createHintScene.call(this, hints);
  hintScene.call(this);
    var Return = this.add
      .image(95, 40, 'Return')
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('puzzle5-6'); // This is meant to change pages
      });

    const table = this.add.image(400, 480, 'table');
    const key5 = this.add.image(783, 500, 'Key5');
    key5.setScale(0.5);
    key5.setAlpha(0);
    this.showBottles = this.scene.get('puzzleSeven').data.get('solvedJigsaw'); // gets data from other scene

    const createBox = (x: number, y: number) => {
      return this.add
        .rectangle(x, y, 100, 100, 0xffffff)
        .setStrokeStyle(2, 0x000000)
        .setInteractive()
        .setData('id', null) as Phaser.GameObjects.Rectangle & { id: string | null };
    };

    const box1 = createBox(250, 340);
    const box2 = createBox(400, 340);
    const box3 = createBox(550, 340);

    const boxes = [box1, box2, box3];
    const droppedBottles: (Phaser.GameObjects.Image | undefined)[] = [undefined, undefined, undefined];

    const updateConsoleLogs = () => {
      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const droppedBottle = droppedBottles[i];

        if (droppedBottle) {
          console.log(`Box${i + 1} has ID: ${droppedBottle.getData('id')}`);
        }
      }
    };

    const checkOrder = () => {
      if (droppedBottles.some((bottle) => !bottle)) {
        return; // Exit if not all boxes have a bottle
      }

      const currentOrder = droppedBottles.map((bottle) => bottle?.getData('id')).join('');
      const correctOrder = 'CAB';

      if (currentOrder === correctOrder) {
        console.log('Unlock the next stage!');
        this.scene.start('EndScene');
        this.scene.get('puzzleSeven').data.set('solvedJigsaw',false); // sets data from other scene
        this.scene.get('puzzleThree').data.set('openedAntlers',false);
        this.scene.get('puzzleThree').data.set('solvedRiddle',false);
        this.scene.get('puzzleTwo').data.set('antler',false);
        this.scene.get('puzzleOne').data.set('fireKey',false);
      } else {
        console.log('Incorrect order, try again!');
      }
    };

    const bottleA = this.add.image(150, 450, 'bottleA').setScale(0.16).setData('id', 'A');
    const bottleB = this.add.image(300, 450, 'bottleB').setScale(0.16).setData('id', 'B');
    const bottleC = this.add.image(450, 450, 'bottleC').setScale(0.16).setData('id', 'C');

    const bottles = [bottleA, bottleB, bottleC];

    bottles.forEach((bottle, index) => {
      if(!this.showBottles){
         bottle.setAlpha(0);
      }
      bottle.setInteractive({ draggable: true });
      this.input.setDraggable(bottle);

      bottle.on('dragstart', () => {
        this.children.bringToTop(bottle);
      });

      bottle.on('drag', (pointer, dragX, dragY) => {
        bottle.setPosition(dragX, dragY);
      });

      bottle.on('dragend', (pointer) => {
        let droppedInBox = false;
      
        boxes.forEach((box, boxIndex) => {
          const boxBounds = box.getBounds();
          const bottleBounds = bottle.getBounds();
      
          if (Phaser.Geom.Rectangle.Contains(boxBounds, bottleBounds.centerX, bottleBounds.centerY)) {
            const droppedBottle = droppedBottles[boxIndex];
      
            if (droppedBottle && droppedBottle !== bottle) {
              const originalPosition = this.getOriginalBottlePosition(bottles.indexOf(droppedBottle));
              droppedBottle.setPosition(originalPosition.x, originalPosition.y);
              const droppedBottleIndex = droppedBottles.indexOf(droppedBottle);
              droppedBottles[droppedBottleIndex] = undefined;
            }
      
            bottle.setPosition(box.x, box.y);
            droppedBottles[boxIndex] = bottle;
            box.setData('id', bottle.getData('id')); // Assign ID to the box
            droppedInBox = true;
          }
        });
      
        if (!droppedInBox) {
          const originalPosition = this.getOriginalBottlePosition(index);
          bottle.setPosition(originalPosition.x, originalPosition.y);
          const boxIndex = droppedBottles.indexOf(bottle);
          droppedBottles[boxIndex] = undefined;
          box1.setData('id', null); // Reset ID of the box
          box2.setData('id', null);
          box3.setData('id', null);
        }
      
        updateConsoleLogs();
        checkOrder();
      });
    });
  }

  getOriginalBottlePosition(index: number) {
    const startX = 150;
    const spacingX = 150;
    const startY = 450;
    const bottleWidth = 64;
    const offsetX = bottleWidth / 2;
    const x = startX + index * spacingX + offsetX;
    const y = startY;
    return new Phaser.Math.Vector2(x, y);
  }
}
