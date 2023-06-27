export default class Puzzle2 extends Phaser.Scene {
    private symbolButtons: Phaser.GameObjects.Rectangle[] = [];
    private secretCompartment: Phaser.GameObjects.Image | undefined;
    private selectedSymbols: number[] = [];
    private correctOrder: number[] = [4, 1, 3, 5, 2, 0];
  
    constructor() {
      super({ key: 'puzzleTwo' });
    }
  
    create() {
      // Add the 'Return' button
      const Return: Phaser.GameObjects.Image = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', () => {
        this.scene.start('MainGame');
      });

      if (this.data.get('antler') == null){ // inital false
        this.data.set('antler', false)
        }
        //Change antler to be with key2 from the second puzzle
  
      // Create the book symbols
      const symbols: string[] = ['Triangle', 'C', '8', 'Circle', 'A', '4'];
      const symbolPositionsX: number[] = [
        this.cameras.main.width / 2 - 220,
        this.cameras.main.width / 2 - 140,
        this.cameras.main.width / 2 - 60,
        this.cameras.main.width / 2 + 60,
        this.cameras.main.width / 2 + 140,
        this.cameras.main.width / 2 + 220,
      ];
  
      for (let i = 0; i < symbols.length; i++) {
        const symbolButton: Phaser.GameObjects.Rectangle = this.add.rectangle(
          symbolPositionsX[i],
          this.cameras.main.height / 2,
          60,
          200,
          0xCCCCCC
        ).setInteractive();
  
        const symbolText: Phaser.GameObjects.Text = this.add.text(
          symbolPositionsX[i],
          this.cameras.main.height / 2,
          symbols[i],
          { font: '14px Arial', color: '#000000', wordWrap: { width: 60 }, align: 'center' }
        );
        symbolText.setOrigin(0.5);
  
        symbolButton.on('pointerup', () => {
          this.highlightSymbol(symbolButton);
          this.selectedSymbols.push(i);
  
          if (this.selectedSymbols.length === this.correctOrder.length) {
            if (this.checkPuzzleOrder()) {
              this.revealSecretCompartment();
            } else {
              this.resetSymbols();
            }
          }
        });
  
        this.symbolButtons.push(symbolButton);
      }
    }
  
    private highlightSymbol(button: Phaser.GameObjects.Rectangle) {
      button.setFillStyle(0xFF0000);
    }
  
    private resetSymbols() {
      this.symbolButtons.forEach((button: Phaser.GameObjects.Rectangle) => {
        button.setFillStyle(0xCCCCCC);
      });
      this.selectedSymbols = [];
    }
  
    private checkPuzzleOrder() {
      return JSON.stringify(this.selectedSymbols) === JSON.stringify(this.correctOrder);
    }
  
    private revealSecretCompartment() {
      if (!this.secretCompartment) {
        this.secretCompartment = this.add.image(1000,100, 'Key2' );
        this.secretCompartment.setInteractive();
        this.secretCompartment.on('pointerdown', () => {
        this.secretCompartment?.destroy();
        this.data.set('antler', true);
         });
        this.secretCompartment.setScale(0.5)
      }
    }
  }
  