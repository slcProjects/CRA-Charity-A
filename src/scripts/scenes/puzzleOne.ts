import GlobalTimer from '../objects/globalTimer';
import { createHintScene } from '../objects/hints';
import MainScene from './mainScene';

export default class Puzzle1 extends Phaser.Scene {
    private code;
    private buttonsPressed;
    private key;
    private correctCode;

    constructor() {
        super({ key: 'puzzleOne' });
        this.code = '';
        this.buttonsPressed = 0;
        this.correctCode = '5839';
    }

    create() {
        const image = this.add.image(0, 0, 'FirePit');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

        const hintsEnglish = [
            "Hint 1: Try reading the paper.",
            "Hint 2: Read the paper closely, it might be helpful.",
            "Hint 3: It seems the code is a 4-digit combination."
        ];

        const hintsFrench = [
            "Indice 1 : Essayez de lire le papier.",
            "Indice 2 : Lisez attentivement le papier, cela pourrait être utile.",
            "Indice 3 : Le code semble être une combinaison de 4 chiffres."
        ];
        var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
          this.scene.start('MainGame');//This is meant to change pages
  
        });
        const hints = MainScene.selectedLanguage === 'English' ? hintsEnglish : hintsFrench;
        const hintScene = createHintScene.call(this, hints);
        hintScene.call(this);

        this.key = this.add.image(600, 400, 'Key1');
        this.key.setScale(0.1, 0.1);
        this.key.setAlpha(0);
        this.key.setInteractive({ useHandCursor: true });
        this.key.on('pointerdown', () => {
          this.scene.start('MainGame'); // Handle the key press to go back to MainGame scene
      });
        const buttons = [] as Phaser.GameObjects.Text[];
        for (let i = 1; i <= 9; i++) {
            const button = this.add.text(230 + ((i - 1) % 3) * 100, 80 + Math.floor((i - 1) / 3) * 80, i.toString(), { fontFamily: 'Arial', fontSize: '32px', color: '#000000' });
            button.setOrigin(0.5);
            button.setInteractive({ useHandCursor: true });
            button.on('pointerup', () => {
                this.onButtonPress(button);
            });
            buttons.push(button);
        }
        this.input.keyboard?.on('keydown-ESC', this.goToOptionsScene, this);

       

        const paper = this.add.image(1150, 500, 'Paper').setInteractive();
        paper.setScale(0.35);

        paper.on('pointerover', () => {
            paper.setTexture('PaperH');
        });

        paper.on('pointerout', () => {
            paper.setTexture('Paper');
        });

        paper.on('pointerdown', () => {
            this.scene.start('paperScene');
        });
    }

    onButtonPress(button) {
        this.buttonsPressed++;
        this.code += button.text;
        console.log(button.text);
        this.disableButton(button);

        if (this.buttonsPressed === 4) {
            if (this.code === this.correctCode) {
                this.key.setAlpha(1);
                this.data.set('fireKey', true);
            } else {
                this.resetButtons();
            }
        }
    }

    returnToPreviousScene() {
        this.scene.start('puzzleOne');
    }

    goToOptionsScene() {
        this.scene.pause();
        this.scene.start('Options', { fromScene: this.scene.key });
        console.log({ fromScene: this.scene.key });
    }

    update(time, delta) {
        GlobalTimer.update(time);
    }

    disableButton(button) {
        button.disableInteractive();
        button.setAlpha(0.5);
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

    enableButton(button) {
        button.setInteractive({ useHandCursor: true });
        button.setAlpha(1);
    }
}
