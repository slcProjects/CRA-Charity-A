import MainScene from './mainScene'; 
import { paperStyle } from '../objects/fpsStyle';
export default class Paper extends Phaser.Scene {

    constructor() {
        super({ key: 'paperScene' });
    }

    create() {
        // Set the background color to #e7e4d3
        this.cameras.main.setBackgroundColor('#e7e4d3');
        
        // Define content in both English and French
        const contentEnglish = [
            'There was a family of 5 living in a winter cabin, they enjoyed their simple life,',
            'falling asleep at 8pm every day. One day, there was a break-in,',
            'everyone was okay but they stole 3 important items from them.',
            'Since that day, they secured their belongings with locks and hidden keys,',
            'using puzzles to ensure nothing important could be stolen again.',
            'Eventually, on the 9th of May, the family moved away due to the stress.'
        ];

        const contentFrench = [
            'Une famille de 5 personnes vivaient dans la cabane d\'hiver et appréciaient leur vie tranquille,',
            ' s\'endormant à 8 heure chaque soir. Un jour, une infraction eu lieu et trois objets ont été dérobés.',
            'Depuis ce jour, leurs biens sont sécurisés et protégés par des serrures et des clés cachées.',
            'Une suite d\'énigmes s\'assure que rien ne pourrait être volé à nouveau.',
            'ils ont sécurisé leurs biens avec des serrures et des clés cachées,',
            'Finalement, le 9 mai dernier, la famille a pris la décision de déménager à cause du stress.'
        ];
  




        const content = MainScene.selectedLanguage === 'English' ? contentEnglish : contentFrench;

        // Adjust the X-coordinate for the French text by adding 100 units
        const textX = MainScene.selectedLanguage === 'English'
            ? this.cameras.main.centerX
            : this.cameras.main.centerX + 0;
          

        var text = this.add.text(textX, this.cameras.main.centerY - 50, content, paperStyle);
        text.setOrigin(0.5);

        const closeButton = this.add.image(45, 0, 'closeButton');
        closeButton.setOrigin(1, 0);
        closeButton.setInteractive();
        closeButton.on('pointerdown', () => {
            closeButton.destroy;
            this.returnToPreviousScene();
          
        });
    }

    goToOptionsScene() {
        this.scene.pause();
        this.scene.start('Options', { fromScene: this.scene.key });
        console.log({ fromScene: this.scene.key });
    }

    // Function to return to the 'PreviousScene'
    returnToPreviousScene() {
        this.scene.start('puzzleOne');
    }
}
//Author Marco De Melo
//marco.demelo2@Student.Sl.On.Ca