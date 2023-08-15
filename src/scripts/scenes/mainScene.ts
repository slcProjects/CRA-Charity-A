import globalTimer from '../objects/globalTimer';
import { introStyle } from '../objects/fpsStyle';

export default class MainScene extends Phaser.Scene {
  static selectedLanguage: string = 'English';
  languageButton: Phaser.GameObjects.Image; // Change the type to Image
  languageImage: Phaser.GameObjects.Image;
  languageText: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'MainScene' });

    MainScene.selectedLanguage = 'English';
  }

  create() {
    const image = this.add.image(0, 0, 'MainMenu');
    image.setOrigin(0.5);
    image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

    this.input.keyboard?.on('keydown-ESC', this.goToOptionsScene, this);

    const StartGameEngButton = this.add.image(645, 360, 'StartGameEngButton').setInteractive();
    StartGameEngButton.on('pointerdown', this.buttonClicked, this);

    // Create a transparent hit area rectangle for the button
    const hitArea = this.add.rectangle(this.cameras.main.centerX, 460, 150, 50, 0x000000, 0).setInteractive();

    // Create language toggle button
    this.languageButton = this.add.image(this.cameras.main.centerX, 460, 'LanguageButton').setInteractive();

    this.languageButton.on('pointerdown', this.toggleLanguage, this);

    // Create language image
    this.languageImage = this.add.image(this.cameras.main.centerX, 450, 'EnglishB');
    this.languageImage.setTint(0xFFFFFF);

    // Create and position the text based on the selected language
    this.languageText = this.add.text(this.cameras.main.centerX, 500, '', introStyle);
    this.languageText.setOrigin(0.5);

    // Set the text based on the selected language
    if (MainScene.selectedLanguage === 'English') {
      this.languageText.setText("This option cannot be switched in-game");
    } else if (MainScene.selectedLanguage === 'French') {
      this.languageText.setText("Cette option ne peut pas être changée en cours de partie");
    }
  }

  toggleLanguage() {
    if (MainScene.selectedLanguage === 'English') {
      MainScene.selectedLanguage = 'French';
      this.languageImage.setTexture('FrenchB');
    } else if (MainScene.selectedLanguage === 'French') {
      MainScene.selectedLanguage = 'English';
      this.languageImage.setTexture('EnglishB');
    }

    // Update the text based on the selected language
    if (MainScene.selectedLanguage === 'English') {
      this.languageText.setText("This option cannot be switched in-game");
    } else if (MainScene.selectedLanguage === 'French') {
      this.languageText.setText("Cette option ne peut pas être changée en cours de partie");
    }
  }

  buttonClicked() {
    if (MainScene.selectedLanguage === 'English') {
      console.log('Starting the game in English');
    } else if (MainScene.selectedLanguage === 'French') {
      console.log('Starting the game in French');
    }

    this.scene.start('storyScene');
  }

  update(time, delta) {
    globalTimer.update(time);
  }

  goToOptionsScene() {
    this.scene.pause();
    this.scene.start('Options', { fromScene: this.scene.key });
    console.log({ fromScene: this.scene.key });
  }
}
