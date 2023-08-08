import GlobalTimer from '../objects/globalTimer';
import { riddleStyle } from '../objects/fpsStyle';
import { createHintScene } from '../objects/hints'
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'puzzleFive' });
  }

  create() {
    var hints = [
      "Hint 1: You can drag and drop the bottles.",
      "Hint 2: Put the Bottles in the boxes.",
      "Hint 3: Put the Bottles in the correct order."
    ];

    const hintScene = createHintScene.call(this, hints);
  hintScene.call(this);
    var Return = this.add
      .image(95, 40, 'Return')
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('puzzle5-6'); // This is meant to change pages
      });

      const image = this.add.image(0,0,'KitchenM')
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

    const key5 = this.add.image(783, 500, 'FinalKey');
    key5.setScale(0.07);
    key5.setAlpha(0);

    const createBox = (x: number, y: number) => {
      return this.add
        .rectangle(x, y, 100, 100, 0x000000) // Black color (0x000000) for the stroke
        .setStrokeStyle(2, 0x000000) // Black color (0x000000) for the stroke
        .setInteractive()
        .setData('id', null)
        .setFillStyle(0xffffff, 0); // Set the fill color to white (0xffffff) and fillAlpha to 0 (fully transparent)
    };
    var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
      this.scene.start('puzzle5-6');//This is meant to change pages

    });
    const riddleBottleB = "Bottle B: 'Lighter than C.'";
    const riddleBottleC = "Bottle C: 'Heavier than A.'";
    const riddleBottleA = "Bottle A: 'Heavier than B.'";

    const riddleText = "Arrange the bottles from heaviest to lightest"

    // Create text objects for each riddle using riddleStyle
    const textBottleB = this.add.text(750, 500, riddleBottleB, riddleStyle);
    const textBottleC = this.add.text(750, 550, riddleBottleC, riddleStyle);
    const textBottleA = this.add.text(750, 600, riddleBottleA, riddleStyle);
    const riddleTextBox = this.add.text(770, 430, riddleText, riddleStyle)


    this.input.keyboard.on('keydown-ESC', this.goToOptionsScene, this);
    const box1 = createBox(600, 175);
    const box2 = createBox(800, 175);
    const box3 = createBox(1000, 175);

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
        key5.setAlpha(1);
      } else {
        console.log('Incorrect order, try again!');
      }
    };

    const bottleA = this.add.image(150, 345, 'bottleA').setScale(0.15).setData('id', 'A');
    const bottleB = this.add.image(300, 345, 'bottleB').setScale(0.15).setData('id', 'B');
    const bottleC = this.add.image(450, 345, 'bottleC').setScale(0.15).setData('id', 'C');

    const bottles = [bottleA, bottleB, bottleC];

    bottles.forEach((bottle, index) => {
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
  update(time, delta) {
    // Call the update function of GlobalTimer to update the timer
    GlobalTimer.update(time);
  }
  getOriginalBottlePosition(index: number) {
    const startX = 150;
    const spacingX = 150;
    const startY = 345;
    const bottleWidth = 64;
    const offsetX = bottleWidth / 2;
    const x = startX + index * spacingX + offsetX;
    const y = startY;
    return new Phaser.Math.Vector2(x, y);
  }
  goToOptionsScene() {
    this.scene.pause();
    this.scene.start('Options', { fromScene: this.scene.key });
    console.log({fromScene: this.scene.key})
  }
}
