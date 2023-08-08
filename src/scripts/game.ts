// game.ts
import 'phaser';
import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';
import PuzzleOne from './scenes/puzzleOne';
import StoryScene from './scenes/storyScene';
import MainGame from './scenes/MainGame';
import PuzzleTwo from './scenes/puzzleTwo';
import PuzzleThree from './scenes/puzzleThree';
import PuzzleThreeFour from './scenes/puzzle3-4';
import PuzzleFiveSix from './scenes/puzzle5-6';
import PuzzleFive from './scenes/puzzleFive';
import Options from './scenes/options';
import PuzzleSeven from './scenes/puzzleSeven';
import Paper from './scenes/Paper';
<<<<<<< HEAD
import EndScene from './scenes/EndScene'
=======
import PaperI from './scenes/PaperI'
>>>>>>> Marco
const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  scene: [
    PreloadScene,
    MainScene,
    MainGame,
    StoryScene,
    PuzzleOne,
    PuzzleTwo,
    PuzzleThree,
    PuzzleThreeFour,
    PuzzleFiveSix,
    PuzzleFive,
    PuzzleSeven,
    Options,
    Paper,
<<<<<<< HEAD
    EndScene
=======
    PaperI
>>>>>>> Marco
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 },
    },
  },
};

window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});
