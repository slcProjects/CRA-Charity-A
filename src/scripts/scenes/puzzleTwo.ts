import GlobalTimer from '../objects/globalTimer';

import { createHintScene } from '../objects/hints';

export default class Puzzle2 extends Phaser.Scene {
  private symbolButtons: Phaser.GameObjects.Rectangle[] = [];
  private secretCompartment: Phaser.GameObjects.Image | undefined;
  private selectedSymbols: number[] = [];
  private correctOrder: number[] = [4, 1, 3, 5, 2, 0];
  private symbolButtonActivated: boolean[] = [];

  constructor() {
    super({ key: 'puzzleTwo' });
  }

  create() {
    const image = this.add.image(0, 0, 'Books');
    image.setOrigin(0.5);
    image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

    var hints = [
      "Hint 1: This is the first hint.",
      "Hint 2: This is the second hint.",
      "Hint 3: This is the third hint."
    ];

    const hintScene = createHintScene.call(this, hints);
    hintScene.call(this);
    this.input.keyboard.on('keydown-ESC', this.goToOptionsScene, this);
    // Add the 'Return' button
    const Return: Phaser.GameObjects.Image = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', () => {
      this.scene.start('MainGame');
    });

    if (this.data.get('antler') == null) { // initial false
      this.data.set('antler', false);
    }
    //Change antler to be with key2 from the second puzzle

    // Create the book symbols
    const symbols: string[] = ['△', 'C', '8', '●', 'A', '4'];
    const symbolPositionsX: number[] = [285, 395, 490, 645, 653, 570,];
    const symbolPositionsY: number[] = [210, 210, 210, 210, 400, 400]; // Unique y-coordinates for each rectangle
    const symbolWidths: number[] = [50, 36, 40, 65, 40, 35]; // Widths for each rectangle
    const symbolHeights: number[] = [170, 170, 170, 170, 160, 160]; // Heights for each rectangle

    for (let i = 0; i < symbols.length; i++) {
      const symbolButton: Phaser.GameObjects.Rectangle = this.add.rectangle(
        symbolPositionsX[i],
        symbolPositionsY[i], 
        symbolWidths[i],
        symbolHeights[i],
        
        
      ).setInteractive();

      const symbolText: Phaser.GameObjects.Text = this.add.text(
        symbolPositionsX[i],
        symbolPositionsY[i], // Use the corresponding y-coordinate
        symbols[i],
        { font: 'bold 14px Arial', color: '#000000', wordWrap: { width: 60 }, align: 'center',  }
      );
      symbolText.setOrigin(0.5);
      if (i === 0) {
        // Apply CSS class to make symbols 1 and 4 larger
        symbolText.setStyle({ fontSize: '24px' });
      }
      if (i === 3) {
        // Apply CSS class to make symbols 1 and 4 larger
        symbolText.setStyle({ fontSize: '30px' });
      }
      
      this.symbolButtonActivated[i] = true; // Set initial activation status to true

      symbolButton.on('pointerup', () => {
        if (this.symbolButtonActivated[i]) {
          this.highlightSymbol(symbolButton);
          this.selectedSymbols.push(i);
          this.symbolButtonActivated[i] = false; // Disable the button after it is clicked

          if (this.selectedSymbols.length === this.correctOrder.length) {
            if (this.checkPuzzleOrder()) {
              this.revealSecretCompartment();
            } else {
              this.resetSymbols();
            }
          }
        }
      });

      this.symbolButtons.push(symbolButton);
    }
  }

  private highlightSymbol(button: Phaser.GameObjects.Rectangle) {
    button.setStrokeStyle(2, 0xFF0000); // Set the fill color to red
  }

  private resetSymbols() {
    this.symbolButtons.forEach((button: Phaser.GameObjects.Rectangle, index: number) => {
      button.setStrokeStyle(0, 0x00000000); // Set the fill color back to the default color
      this.symbolButtonActivated[index] = true; // Enable the button for clicking again
    });
    this.selectedSymbols = [];
  }

  private checkPuzzleOrder() {
    return JSON.stringify(this.selectedSymbols) === JSON.stringify(this.correctOrder);
  }

  private revealSecretCompartment() {
    if (!this.secretCompartment) {
      this.secretCompartment = this.add.image(1000, 100, 'Key2');
      this.secretCompartment.setInteractive();
      this.secretCompartment.on('pointerdown', () => {
        this.secretCompartment?.destroy();
        this.data.set('antler', true);
      });
      this.secretCompartment.setScale(0.5);
    }
  }
  update(time, delta) {
    // Call the update function of GlobalTimer to update the timer
    GlobalTimer.update(time);
  }
  
  goToOptionsScene() {
    this.scene.pause();
    this.scene.start('Options', { fromScene: this.scene.key });
    console.log({fromScene: this.scene.key})
  }
}
