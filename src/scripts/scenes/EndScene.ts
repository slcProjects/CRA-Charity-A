import { textStyle } from '../objects/fpsStyle';
import GlobalTimer from '../objects/globalTimer'; // Import the global timer
import MainScene from './mainScene';
export default class Game extends Phaser.Scene {

    #popup; // Private variable for the popup
    #nameInput;

    constructor() {
        super({ key: 'EndScene' });
    }

    create() {
        const image = this.add.image(0, 0, 'End');
    
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
    
        const contentEnglish = [
            'You have escaped the old winter cabin in the Canadian wilderness,',
            'you\'ve explored its secrets. As you step outside onto the snow, ',
            'you feel a sense of accomplishment as you have escaped this weird house full of puzzles.',
            'Now you are on a journey to tell your friends about what has occurred.',
            '                                                             ',
            '                                                             ',
            '                                                             ',
            '                                                             ',
            'Created by Marco De Melo and Riley Lawrence-Nebesnuik'
        ];
    
        const contentFrench = [
            'vous avez échappé à la vieille cabane d\'hiver dans la nature sauvage canadienne,',
            'vous avez exploré ses secrets. En sortant dans la neige, ',
            'vous ressentez un sentiment d\'accomplissement car vous avez échappé,',
            'Cette étrange maison pleine de puzzles. Maintenant,',
            ' vous partez en voyage pour raconter à vos amis ce qui s\'est passé.',                                                        
            '                                                             ',
            '                                                             ',
            '                                                             ',
            'Créé par Marco De Melo et Riley Lawrence-Nebesnuik'
        ];
    
        const selectedLanguageContent = MainScene.selectedLanguage === 'English' ? contentEnglish : contentFrench;
    
        const textX = MainScene.selectedLanguage === 'English' ? this.cameras.main.centerX - 285 : this.cameras.main.centerX - 435; // Adjusted the X coordinate for English text
        const textY = this.cameras.main.centerY - 330;
    
        var text = this.add.text(textX, textY, selectedLanguageContent, textStyle);
        text.setColor('fad643');
        text.setLineSpacing(17);
        text.setScale(0.75);
    
        const Continue = this.add.image(1000, 680, 'Continue').setInteractive();
        Continue.on('pointerdown', this.showPopup, this);
    }

    showPopup() {
        this.#popup = this.add.container(0, 0);
    
        const popupBackground = this.add.graphics();
        popupBackground.fillStyle(0x000000, 0.9);
        popupBackground.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
    
        const congratulationsText = MainScene.selectedLanguage === 'English'
            ? `Congratulations!\nYour final time: ${GlobalTimer.formatTime(GlobalTimer.getTimer())}`
            : `Félicitations !\nVotre temps final : ${GlobalTimer.formatTime(GlobalTimer.getTimer())}`;
    
        const congratulations = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, congratulationsText, {
            fontSize: '24px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
    
        const enterNameText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 10, MainScene.selectedLanguage === 'English' ? 'Enter Name:' : 'Entrez votre nom :', {
            fontSize: '18px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
    
        this.#nameInput = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 50, '', {
            fontSize: '16px',
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: {
                x: 10,
                y: 5,
            }
        }).setOrigin(0.5).setInteractive();
    
        const ContinueButtonPopup = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY + 100, 'Enter').setInteractive();
        ContinueButtonPopup.on('pointerdown', () => {
            this.handleEnterPressed();
        });
    
        this.#popup.add([popupBackground, congratulations, enterNameText, this.#nameInput, ContinueButtonPopup]);
    
        this.input.keyboard?.on('keydown', (event) => {
            if (this.#nameInput.text.length < 11) {
                if (event.key.match(/^[a-zA-Z0-9\s]$/)) {
                    this.#nameInput.text += event.key;
                } else if (event.key === 'Backspace' && this.#nameInput.text.length > 0) {
                    this.#nameInput.text = this.#nameInput.text.slice(0, -1);
                }
            }
        });
    }
    
    handleEnterPressed() {
        const userName = this.#nameInput.text.trim();
        if (userName !== '') {
            console.log(`Name: ${userName}\nTime: ${GlobalTimer.formatTime(GlobalTimer.getTimer())}`);
            this.scene.start('MainScene');
        }
    }
}