import Phaser from 'phaser';

export function createHintScene(hints: string[]) {
  return function(this: Phaser.Scene) {
    const scene = this;

    const DEFAULT_WIDTH = 1280;
    const DEFAULT_HEIGHT = 720;

    // Create the hint popup screen
    const hintPopup = scene.add.container(DEFAULT_WIDTH / 2 + 200, DEFAULT_HEIGHT / 2 - 50);
    hintPopup.setVisible(false);
    hintPopup.setDepth(2);
    

    // Create the hint popup background
    const popupBackground = scene.add.rectangle(0, 0, 570, 285, 0xeeeeee);
    popupBackground.setOrigin(0.5);
    popupBackground.setDepth(1);
    hintPopup.add(popupBackground);

    // Create the hint text
    const hintText = scene.add.text(0, -30, '', {
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
    const leftArrow = scene.add.image(-100,80, 'leftArrowHint')
      .setInteractive()
      .on('pointerdown', showPreviousHint, this);
    hintPopup.add(leftArrow);

    // Create the right arrow button
    const rightArrow = scene.add.image(100, 80, 'rightArrowHint')
      .setInteractive()
      .on('pointerdown', showNextHint, this);
    hintPopup.add(rightArrow);

    // Create the close button (x)
    const closeButton = scene.add.image(255, -120, 'closeButton')
      .setInteractive()
      .on('pointerdown', closeHintPopup, this);
    hintPopup.add(closeButton);
    closeButton.setScale(0.6);

    // Variable to keep track of the current hint index
    let currentHintIndex: number = 0;

    // Function to show the hint popup
    function showHintPopup() {
      hintPopup.setVisible(true);
      updateHintText();
    }

    // Function to close the hint popup
    function closeHintPopup() {
      hintPopup.setVisible(false);
    }

    // Function to show the previous hint
    function showPreviousHint() {
      currentHintIndex = (currentHintIndex - 1 + hints.length) % hints.length;
      updateHintText();
    }

    // Function to show the next hint
    function showNextHint() {
      currentHintIndex = (currentHintIndex + 1) % hints.length;
      updateHintText();
    }

    // Function to update the hint text
    function updateHintText() {
      hintText.setText(hints[currentHintIndex]);
    }

    // Event listener for the hints button click
    const hintsButton = scene.add.image(DEFAULT_WIDTH - 30, 30, 'hintsButton')
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
