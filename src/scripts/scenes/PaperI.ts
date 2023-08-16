

export default class Paper extends Phaser.Scene {

    constructor() {
        super({ key: 'paperIScene' });
    }

    create() {
        // Set the background color to #e7e4d3
        this.cameras.main.setBackgroundColor('#e7e4d3');

       

       
         const image1 = this.add.image(250,150, 'Pz2PImg1')
         const image2 = this.add.image(600,150, 'Pz2PImg2')
         const image3 = this.add.image(900,150, 'Pz2PImg3')
         const image4 = this.add.image(250,500, 'Pz2PImg4')
         const image5 = this.add.image(600,500, 'Pz2PImg5')
         const image6 = this.add.image(900,500, 'Pz2PImg6')

         image1.setScale(0.25)
         image2.setScale(0.35)
         image3.setScale(1)
         image6.setScale(0.3)
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
    this.scene.start('puzzleTwo');
}


}
//Author Marco De Melo
//marco.demelo2@Student.Sl.On.Ca