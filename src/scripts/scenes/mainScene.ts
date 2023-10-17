import globalTimer from '../objects/globalTimer'; // Importing the globalTimer module from a specific path
import { introStyle } from '../objects/fpsStyle'; // Importing the introStyle from a specific path

export default class MainScene extends Phaser.Scene { // Defining the MainScene class that extends Phaser.Scene
  static selectedLanguage: string = 'English'; // Setting the default selected language to English
  languageButton: Phaser.GameObjects.Image; // Declaring a variable to store a Phaser Image object for the language button
  languageImage: Phaser.GameObjects.Image; // Declaring a variable to store a Phaser Image object for the language image
  languageText: Phaser.GameObjects.Text; // Declaring a variable to store a Phaser Text object for the language text
  bottomLeftText: Phaser.GameObjects.Text;
  StartGameButton: Phaser.GameObjects.Image;
  
  constructor() {
    super({ key: 'MainScene' }); // Calling the constructor of the parent class with a specific key

    MainScene.selectedLanguage = 'English'; // Setting the selected language to English
  }

  create() {
    const image = this.add.image(0, 0, 'MainMenu'); // Adding an image at coordinates (0, 0) with the 'MainMenu' key
    image.setOrigin(0.5); // Setting the origin of the image to its center
    image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY); // Positioning the image at the center of the camera
    image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height); // Scaling the image to fit the camera

    this.input.keyboard.on('keydown-ESC', this.goToOptionsScene, this); // Listening for the 'ESC' key press to trigger the goToOptionsScene function
  
      const StartGameButton = this.add.image(645, 360, 'StartGameEngButton').setInteractive(); // Adding an interactive image button at (645, 360) with the 'StartGameEngButton' key
      StartGameButton.on('pointerdown', this.buttonClicked, this); // Listening for a pointer click on the button to trigger the buttonClicked function
      this.StartGameButton = StartGameButton;
   
    
    const hitArea = this.add.rectangle(this.cameras.main.centerX, 460, 150, 50, 0x000000, 0).setInteractive(); // Creating an invisible interactive hit area rectangle

    this.languageButton = this.add.image(this.cameras.main.centerX, 460, 'LanguageButton').setInteractive(); // Adding an interactive image button for language toggle
    this.languageButton.on('pointerdown', this.toggleLanguage, this); // Listening for a pointer click on the button to trigger the toggleLanguage function

    this.languageImage = this.add.image(this.cameras.main.centerX, 450, 'EnglishB'); // Adding an image for the selected language
    this.languageImage.setTint(0xFFFFFF); // Applying a white tint to the language image

    this.languageText = this.add.text(this.cameras.main.centerX, 500, '', introStyle); // Adding a text object for language display
    this.languageText.setOrigin(0.5); // Setting the origin of the text to its center

   
    if (MainScene.selectedLanguage === 'English') {
      this.languageText.setText("This option cannot be switched in-game"); // Setting text for the language text based on the selected language
    } else if (MainScene.selectedLanguage === 'French') {
      this.languageText.setText("Cette option ne peut être modifiée une fois le jeu commencé"); // Setting text for the language text based on the selected language
    }
    
      // Initialize the bottom left text element
      this.bottomLeftText = this.add.text(10, this.cameras.main.height - 10, "Press Esc to access timer/options menu", {
        font: '16px Arial',
        color: '#ffffff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: { x: 10, y: 5 },
      });
      this.bottomLeftText.setOrigin(0, 1);
  }

  toggleLanguage() {
    if (MainScene.selectedLanguage === 'English') { // Checking the selected language
      MainScene.selectedLanguage = 'French'; // Changing the selected language
      this.languageImage.setTexture('FrenchB'); // Changing the texture of the language image
      this.bottomLeftText.setText("Appuyez sur Échap pour accéder à votre menu d’options et voir votre temps");
      this.StartGameButton.setTexture('StartGameFreButton')
    } else if (MainScene.selectedLanguage === 'French') {
      MainScene.selectedLanguage = 'English';
      this.languageImage.setTexture('EnglishB');
      this.bottomLeftText.setText("Press Esc to access your options menu and see your time");
      this.StartGameButton.setTexture('StartGameEngButton')
    }

    if (MainScene.selectedLanguage === 'English') {
      this.languageText.setText("This option cannot be switched in-game"); // Updating the language text based on the selected language
    } else if (MainScene.selectedLanguage === 'French') {
      this.languageText.setText("Cette option ne peut être modifiée une fois le jeu commencé");
    }
  }

  buttonClicked() {
    if (MainScene.selectedLanguage === 'English') {
      console.log('Starting the game in English'); // Logging a message based on the selected language
    } else if (MainScene.selectedLanguage === 'French') {
      console.log('Starting the game in French');
    }

    this.scene.start('storyScene'); // Starting the 'storyScene'
  }

  update(time, delta) {
    globalTimer.update(time); // Updating the global timer
  }

  goToOptionsScene() {
    this.scene.pause(); // Pausing the current scene
    this.scene.start('Options', { fromScene: this.scene.key }); // Starting the 'Options' scene with additional data
    console.log({ fromScene: this.scene.key }); // Logging the information about the previous scene
  }
}

//Author Marco De Melo
//marco.demelo2@Student.Sl.On.Ca
