import GlobalTimer from '../objects/globalTimer';

export default class Options extends Phaser.Scene {
  fromScene: string;
  pauseMenuContainer: Phaser.GameObjects.Container | null;
  volumeText: Phaser.GameObjects.Text | null;
  volumePercentage: number = 50;
  volumeArrowLeft: Phaser.GameObjects.Image | null;
  volumeArrowRight: Phaser.GameObjects.Image | null;
  timerText: Phaser.GameObjects.Text | null;

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

    const containerWidth = 500;
    const containerHeight = 600;
    const containerBackgroundColor = 0xdddddd;

    this.pauseMenuContainer = this.add.container(this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.pauseMenuContainer.setScrollFactor(0);
    this.pauseMenuContainer.setDepth(1);

    const background = this.add.rectangle(0, 0, containerWidth, containerHeight, containerBackgroundColor);
    this.pauseMenuContainer.add(background);

    const closeButton = this.add.image(containerWidth / 2 - 20, -containerHeight / 2 + 10, 'closeButton');
    closeButton.setOrigin(1, 0);
    closeButton.setInteractive();
    closeButton.on('pointerdown', this.returnToPreviousScene, this);
    this.pauseMenuContainer.add(closeButton);

    this.volumeText = this.add.text(
      -240,
      -260,
      `Volume:  ${this.volumePercentage}%`,
      { fontSize: '25px', color: '#000000' }
    );
    this.volumeText.setOrigin(0, 0);
    this.pauseMenuContainer.add(this.volumeText);

    this.timerText = this.add.text(
      -240,
      -230,
      `Time: `,
      { fontSize: '25px', color: '#000000' }
    );
    this.timerText.setOrigin(0, 0);
    this.pauseMenuContainer.add(this.timerText);

    this.volumeArrowLeft = this.add.image(
      -140,
      -230,
      'leftArrowHint'
    );
    this.volumeArrowLeft.setOrigin(0, 0);
    this.volumeArrowLeft.setInteractive();
    this.volumeArrowLeft.setScale(0.70);
    this.volumeArrowLeft.setRotation(Phaser.Math.DegToRad(-90));
    this.volumeArrowLeft.on('pointerdown', this.onVolumeLeftClicked, this);
    this.pauseMenuContainer.add(this.volumeArrowLeft);

    this.volumeArrowRight = this.add.image(
      -60,
      -230,
      'rightArrowHint'
    );
    this.volumeArrowRight.setOrigin(0, 0);
    this.volumeArrowRight.setInteractive();
    this.volumeArrowRight.setScale(0.70);
    this.volumeArrowRight.setRotation(Phaser.Math.DegToRad(-90));
    this.volumeArrowRight.on('pointerdown', this.onVolumeRightClicked, this);
    this.pauseMenuContainer.add(this.volumeArrowRight);

   

    // Register the `update` callback with the Scene Manager to automatically handle updates
    this.events.on('update', this.handleGlobalTimerUpdate, this);
  }
  update(time, delta) {
    // Call the update function of GlobalTimer to update the timer
    GlobalTimer.update(time);
  }
  returnToPreviousScene() {
    this.scene.start(this.fromScene);
    console.log(this.fromScene, 'ESCAPE');
    this.scene.stop();
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

  // Custom callback to update the timer text
  handleGlobalTimerUpdate() {
    const timerValue = GlobalTimer.getTimer();
    const formattedTime = GlobalTimer.formatTime(timerValue);
    if (this.timerText) {
      this.timerText.setText(`Time: ${formattedTime}`);
    }
  }
}
