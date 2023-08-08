import { textStyle } from '../objects/fpsStyle';

export default class Paper extends Phaser.Scene {

    constructor() {
        super({ key: 'paperScene' });
    }

    create() {
        // Set the background color to #e7e4d3
        this.cameras.main.setBackgroundColor('#e7e4d3');

        const content = [
            'Blah Blah Blah Blah Blah Blah Blah',
            'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
            'Blah Blah Blah Blah Blah Blah Blah',
            'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah,',
            'Blah Blah Blah Blah Blah Blah Blah'
            // Possibly Changed, the story
        ];

        var text = this.add.text(this.cameras.main.centerX - 500, this.cameras.main.centerY - 100, content, textStyle);

        const closeButton = this.add.image(45, 0, 'closeButton');
        closeButton.setOrigin(1, 0);
        closeButton.setInteractive();
        closeButton.on('pointerdown', this.returnToPreviousScene, this);
        
       
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
