import { paperStyle } from '../objects/fpsStyle';

export default class Paper extends Phaser.Scene {

    constructor() {
        super({ key: 'paperScene' });
    }

    create() {
        // Set the background color to #e7e4d3
        this.cameras.main.setBackgroundColor('#e7e4d3');
        
        const content = [
            'There was a family of 5 living in a winter cabin, they liked their simple life,',
            'falling asleep at 8pm everyday. One day they had a attempted break in,',
            'everyone was fine but they stole 3 things of importance from them.',
            'From that day on, they put locks and hid the keys away with puzzles,',
            'so that no one could steal anything important again.',
            'In the end the family left on a 9th of May because of the stress of it all.'
            
        ];

        var text = this.add.text(this.cameras.main.centerX - 500, this.cameras.main.centerY - 100, content,  paperStyle);

        const closeButton = this.add.image(45, 0, 'closeButton');
        closeButton.setOrigin(1, 0);
        closeButton.setInteractive({ useHandCursor: true });
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
