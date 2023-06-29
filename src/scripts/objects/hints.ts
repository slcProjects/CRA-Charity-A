import Phaser from 'phaser';

export function createHintScene(hints: string[]) {
  return function(this: Phaser.Scene) {
    var scene = this;

    const DEFAULT_WIDTH = 1280;
    const DEFAULT_HEIGHT = 720;

    // Create the hint popup screen
    var hintPopup = scene.add.container(DEFAULT_WIDTH / 2 + 200, DEFAULT_HEIGHT / 2 - 50);
    hintPopup.visible = false;
    hintPopup.setDepth(2);

    // Create the background rectangle for the hint popup
    var popupBackground = scene.add.rectangle(0, 0, 570, 285, 0xeeeeee);
    popupBackground.setOrigin(0.5);
    popupBackground.setDepth(1);
    hintPopup.add(popupBackground);

    // Create the hint text
    var hintText = scene.add.text(0, -100, '', {
      fontFamily: 'Arial',
      fontSize: '24px',
      color: '#000000',
      align: 'center',
      wordWrap: { width: 500, useAdvancedWrap: true }
    })
      .setOrigin(0.5)
      .setDepth(2);
    hintPopup.add(hintText);

    // Create the left arrow button
    var leftArrow = scene.add.image(-100, 0, 'leftArrow')
      .setInteractive()
      .setOrigin(0.5)
      .setScale(0.5)
      .setDepth(2)
      .on('pointerdown', showPreviousHint, scene); // Pass the scene context to the event listener
    hintPopup.add(leftArrow);

    // Create the right arrow button
    var rightArrow = scene.add.image(100, 0, 'rightArrow')
      .setInteractive()
      .setOrigin(0.5)
      .setScale(0.5)
      .setDepth(2)
      .on('pointerdown', showNextHint, scene); // Pass the scene context to the event listener
    hintPopup.add(rightArrow);

    // Create the close button (x)
    var closeButton = scene.add.image(200, -100, 'closeButton')
      .setInteractive()
      .setOrigin(0.5)
      .setScale(0.5)
      .setDepth(2)
      .on('pointerdown', closeHintPopup, scene); // Pass the scene context to the event listener
    hintPopup.add(closeButton);

    // Variable to keep track of the current hint index
    var currentHintIndex: number = 0;

    // Function to show the hint popup
    function showHintPopup() {
      hintPopup.visible = true;
      updateHintText();
    }

    // Function to close the hint popup
    function closeHintPopup() {
      hintPopup.visible = false;
    }

    // Function to show the previous hint
    function showPreviousHint() {
      currentHintIndex = ((currentHintIndex - 1 + hints.length) % hints.length) as number;
      updateHintText();
    }

    // Function to show the next hint
    function showNextHint() {
      currentHintIndex = ((currentHintIndex + 1) % hints.length) as number;
      updateHintText();
    }

    // Function to update the hint text
    function updateHintText() {
      hintText.setText(hints[currentHintIndex]);
    }

    // Event listener for the hints button click
    var hintsButton = scene.add.image(DEFAULT_WIDTH - 30, 30, 'hintsButton')
      .setInteractive()
      .setTint(0x777777)
      .setScale(0.5)
      .setOrigin(1, 0)
      .setDepth(1)
      .on('pointerdown', showHintPopup);

    // Adjust the background size
    popupBackground.displayWidth *= 0.95;
    popupBackground.displayHeight *= 0.95;
  };
}
