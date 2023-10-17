import GlobalTimer from '../objects/globalTimer';
import { createHintScene } from '../objects/hints';
import MainScene from './mainScene'; 

export default class Puzzle3 extends Phaser.Scene {
    private gotKey;
    private key;

    constructor() {
        super({ key: 'puzzleThree' });
        this.gotKey = false;
        this.key = false;
    }

    create() {
        const image = this.add.image(0, 0, 'moose');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

        var hintsEnglish = [
            "Hint 1: The Key is in a different room",
            "Hint 2: Often perceived as valuable",
            "Hint 3: may shines brightly"
        ];

        var hintsFrench = [
            "Indice 1: La clé est dans une pièce différente",
            "Indice 2: Souvent perçue comme précieuse",
            "Indice 3: peut briller de mille feux"
        ];

        const hintScene = createHintScene.call(this, MainScene.selectedLanguage === 'English' ? hintsEnglish : hintsFrench);
        hintScene.call(this);

        this.gotKey = this.scene.get('puzzleTwo').data.get('antler'); // gets data from other scene

        if (this.data.get('openedAntlers') == null || this.data.get('solvedRiddle') == null) {
            // sets starting values once when they are nothing
            this.data.set('openedAntlers', false);
            this.data.set('solvedRiddle', false);
        }

        const Antlers = this.add.rectangle(420, 200, 50, 50).setInteractive({ useHandCursor: true }); // this will be the moose antlers in game
        const riddle1ImageKey = MainScene.selectedLanguage === 'English' ? 'Riddle1' : 'Riddle1Fr';
        const riddle2ImageKey = MainScene.selectedLanguage === 'English' ? 'Riddle2' : 'Riddle2Fr';
        var riddle = this.add.image(900, 300, riddle1ImageKey).setScale(0.5);
        let key = this.add.image(850, 500, 'Key1').setScale(0.1, 0.1).setInteractive().setVisible(false);
        // Define the text based on the selected language
        const textEntryText = MainScene.selectedLanguage === 'English' ? 'Start typing...' : 'Vous pouvez commencer à écrire';

        // Adjust the position of the text for the French language
        const textEntryX = MainScene.selectedLanguage === 'English' ? 850 : 650; // Adjust X coordinate for French
        const textEntry = this.add.text(textEntryX, 500, textEntryText, { font: '32px Courier', color: 'black' });
        textEntry.visible = false;


        this.input.keyboard?.on('keydown-ESC', this.goToOptionsScene, this);

        if (this.data.get('openedAntlers')) {
            // used for saving progress after switching scenes
            riddle.destroy();
            riddle = this.add.image(900, 300, riddle2ImageKey).setScale(0.5);
            textEntry.visible = true;
            Antlers.disableInteractive();
            Antlers.setAlpha(0.5);

            if (this.data.get('solvedRiddle')) {
                // used for saving progress after switching scenes
                textEntry.visible = true;
                if (!this.key) key.setVisible(true);
                textEntry.visible = false;
            }
        }

        key.on('pointerdown', () => {
            key.destroy();
            this.key = true;
        });

        // if click antlers with key show next riddle
        Antlers.on('pointerdown', () => {
            if (this.gotKey) {
                Antlers.disableInteractive();
                Antlers.setAlpha(0.5);
                this.data.set('openedAntlers', true);
                riddle.destroy();
                riddle = this.add.image(900, 300, riddle2ImageKey).setScale(0.5);
                textEntry.visible = true;
            }
        });

        // Add text if it is 'gem', remove and give key
        // else if it's too big or they hit enter, give key
        this?.input?.keyboard?.on('keydown', (event) => {
            if (textEntry.text == 'Start typing...') {
                textEntry.text = '';
            }

            if (event.keyCode === 8 && textEntry.text.length > 0) {
                // backspace
                textEntry.text = textEntry.text.substring(0, textEntry.text.length - 1);
            } else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
                // Alphanumeric or space
                textEntry.text += event.key;
            }

            if (textEntry.text.length > 5 || event.keyCode === 13) {
                // If the text is longer than 5 characters or Enter key is pressed, clear the text
                textEntry.text = '';
            } else if (MainScene.selectedLanguage === 'English' && textEntry.text.toLowerCase() === 'gem') {
                // If the selected language is English and the text is 'gem', perform these actions
                this.data.set('solvedRiddle', true);
                textEntry.visible = false;
                key.visible = true;
            } else if (MainScene.selectedLanguage === 'French' && textEntry.text.toLowerCase() === 'bijou') {
                // If the selected language is French and the text is 'bijou', perform these actions
                this.data.set('solvedRiddle', true);
                textEntry.visible = false;
                key.visible = true;
            }
        });
        if(MainScene.selectedLanguage==='English')
        {
            var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
                this.scene.start('puzzle3-4');//This is meant to change pages
        
              });
        }
        else if(MainScene.selectedLanguage==='French')
        {
            var Return = this.add.image(95, 40, 'Retour').setInteractive().on('pointerdown', ()=> {
                this.scene.start('puzzle3-4');//This is meant to change pages
        
              });
        }
       
       
    }

    update(time, delta) {
        // Call the update function of GlobalTimer to update the timer
        GlobalTimer.update(time);
    }

    goToOptionsScene() {
        this.scene.pause();
        this.scene.start('Options', { fromScene: this.scene.key });
        console.log({ fromScene: this.scene.key });
    }
}
