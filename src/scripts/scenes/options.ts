// Options.ts

export default class Options extends Phaser.Scene {
    fromScene: string;
    pauseMenuContainer: Phaser.GameObjects.Container | null;
    volumeText: Phaser.GameObjects.Text | null;
    volumePercentage: number = 50; // Default volume set to 50%
    volumeArrowLeft: Phaser.GameObjects.Image | null;
    volumeArrowRight: Phaser.GameObjects.Image | null;
  
    constructor() {
      super('Options');
    }
  
    init(data: { fromScene: string }) {
      this.fromScene = data.fromScene;
    }
  
    create() {
        const image = this.add.image(0, 0, 'Options');
       
      image.setOrigin(0.5);
      image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
      image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

      // Create the pause menu container and set its properties
      const containerWidth = 500;
      const containerHeight = 600;
      const containerBackgroundColor = 0xdddddd;
  
      this.pauseMenuContainer = this.add.container(this.cameras.main.width / 2, this.cameras.main.height / 2);
      this.pauseMenuContainer.setScrollFactor(0);
      this.pauseMenuContainer.setDepth(1);
  
      const background = this.add.rectangle(0, 0, containerWidth, containerHeight, containerBackgroundColor);
      this.pauseMenuContainer.add(background);
  
      // Add a close button 'x' on the top right to close the menu and return to the previous scene
      const closeButton = this.add.image(containerWidth / 2 - 20, -containerHeight / 2 + 10, 'closeButton');
      closeButton.setOrigin(1, 0);
      closeButton.setInteractive();
      closeButton.on('pointerdown', this.returnToPreviousScene, this);
      this.pauseMenuContainer.add(closeButton);
  
      // Add volume text
      this.volumeText = this.add.text(
        -240,             // X-coordinate
        -260,             // Y-coordinate
       `Volume:  ${this.volumePercentage}%`, { fontSize: '25px', color: '#000000' }); // Increase the font size to 25px
      this.volumeText.setOrigin(0, 0);
      this.pauseMenuContainer.add(this.volumeText);
  
      // Add arrows to adjust volume
      this.volumeArrowLeft = this.add.image(
         -140,             // X-coordinate
         -230,             // Y-coordinate
       'leftArrowHint'); // Align the arrow to the right of the volume text
      this.volumeArrowLeft.setOrigin(0, 0);
      this.volumeArrowLeft.setInteractive();
      this.volumeArrowLeft.setScale(0.70);
      this.volumeArrowLeft.setRotation(Phaser.Math.DegToRad(-90));
      this.volumeArrowLeft.on('pointerdown', this.onVolumeLeftClicked, this);
      this.pauseMenuContainer.add(this.volumeArrowLeft);
  
      this.volumeArrowRight = this.add.image(
        -60,             // X-coordinate
        -230,             // Y-coordinate
       'rightArrowHint'); // Align the arrow to the right of the volume text
      this.volumeArrowRight.setOrigin(0, 0);
      this.volumeArrowRight.setInteractive();
      this.volumeArrowRight.setScale(0.70);
      this.volumeArrowRight.setRotation(Phaser.Math.DegToRad(-90));
      this.volumeArrowRight.on('pointerdown', this.onVolumeRightClicked, this);
      this.pauseMenuContainer.add(this.volumeArrowRight);
  
      // Set the pause menu container to be invisible by default
      if (this.pauseMenuContainer) {
        this.pauseMenuContainer.setVisible(false);
      }
  
      // Open options automatically when the scene is launched
      this.togglePause();
    }
  
    returnToPreviousScene() {
      this.scene.start(this.fromScene);
      console.log(this.fromScene, 'ESCAPE');
      this.scene.stop();
    }
  
    togglePause() {
      if (this.pauseMenuContainer) {
        this.pauseMenuContainer.setVisible(!this.pauseMenuContainer.visible);
  
        if (this.pauseMenuContainer.visible) {
          this.scene.pause(this.fromScene);
        } else {
          this.scene.resume(this.fromScene);
        }
      }
    }
  
    onVolumeLeftClicked() {
      this.volumePercentage = Phaser.Math.Clamp(this.volumePercentage - 10, 0, 100);
      this.updateVolumeText();
      console.log("Volume Down Clicked");
    }
  
    onVolumeRightClicked() {
      this.volumePercentage = Phaser.Math.Clamp(this.volumePercentage + 10, 0, 100);
      this.updateVolumeText();
      console.log("Volume Up Clicked");
    }
  
    updateVolumeText() {
      if (this.volumeText) {
        this.volumeText.setText(`Volume:  ${this.volumePercentage}%`);
      }
    }
  }
  