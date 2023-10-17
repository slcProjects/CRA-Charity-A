import GlobalTimer from '../objects/globalTimer';
import { GameObjects } from "phaser";
import { createHintScene } from '../objects/hints';
import MainScene from './mainScene'; 

export default class Puzzle7 extends Phaser.Scene {
    private gotKey;

    constructor() {
        super({ key: 'puzzleSeven' });
    }

    create() {
        const image = this.add.image(0, 0, 'canoe');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

        if (this.data.get('solvedJigsaw') == null) {
            // sets starting values once when they are nothing
            this.data.set('solvedJigsaw', false);
        }

        if(MainScene.selectedLanguage==='English')
        {
            var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
                this.scene.start('puzzle3-4');//This is meant to change pages
        
              });
        }
        else if(MainScene.selectedLanguage==='French')
        {
            var Return = this.add.image(95, 40, 'Retour').setInteractive().on('pointerdown', ()=> {
                this.scene.start('puzzle3-4');//This is meant to change pages
        
              });
        }
       


        var hintsEnglish = [
            "Hint 1: Image of a flag with writing",
            "Hint 2: Go to the kitchen when you are done this puzzle"
        ];

        var hintsFrench = [
            "Indice 1: Image d'un drapeau",
            "Indice 2: Retourner à la cuisine une fois cette énigme résolue "
        ];

        const hintScene = createHintScene.call(this, MainScene.selectedLanguage === 'English' ? hintsEnglish : hintsFrench);
        hintScene.call(this);

        this.input.keyboard?.on('keydown-ESC', this.goToOptionsScene, this);

        var scale = .6;
        var pieceSize = 128 * scale;

        var scale = .4;
        var pieceSize = 45;
        var offset = 5;
        const outlines: GameObjects.Rectangle[] = [];
        const images: GameObjects.Image[] = [];

        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                var outline = this.add.rectangle(
                    1000 + y * pieceSize,
                    230 + x * pieceSize,
                    pieceSize,
                    pieceSize,
                    0xFFFFFF
                );
                var value = Phaser.Math.Between(-150, 150);
                outlines.push(outline);
                let image;
                if(MainScene.selectedLanguage === 'English'){
                image = this.add.image(400 + 150, 400 + 150, 'flag')
                    .setCrop(pieceSize * y, pieceSize * x, pieceSize, pieceSize)
                    .setDepth(1)
                    .setInteractive(new Phaser.Geom.Rectangle(pieceSize * y, pieceSize * x, pieceSize, pieceSize), Phaser.Geom.Rectangle.Contains)
                    .setInteractive({ useHandCursor: true });
                    
                }
                else{
                image = this.add.image(400 + 150, 400 + 150, 'flagFrench')
                    .setCrop(pieceSize * y, pieceSize * x, pieceSize, pieceSize)
                    .setDepth(1)
                    .setInteractive(new Phaser.Geom.Rectangle(pieceSize * y, pieceSize * x, pieceSize, pieceSize), Phaser.Geom.Rectangle.Contains)
                    .setInteractive({ useHandCursor: true });
                   
                }
                this.input.setDraggable(image, true);

                images.push(image);
                for (let i = 0; i < images.length; i++) {
                    const x = Phaser.Math.Between(200, 350);
                    const y = Phaser.Math.Between(400, 550);
                
                    images.at(i)!.setPosition(x, y);
                }
            }
           
            if (this.data.get('solvedJigsaw')) {
                for (let index = 0; index < images.length; index++) {
                    images.at(index)?.setY(298);
                    images.at(index)?.setX(1068);
                    images.at(index)!.disableInteractive();
                }
            }
        }

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', (gameObject) => {
            let count = 0;
            for (let index = 0; index < images.length; index++) {
                if ((images.at(index)!.x >= 1068 - offset && images.at(index)!.x <= 1068 + offset) &&
                    (images.at(index)!.y >= 298 - offset && images.at(index)!.y <= 298 + offset)) {

                    images.at(index)?.setY(298);
                    images.at(index)?.setX(1068);
                    images.at(index)!.disableInteractive();
                    count++;
                }
            }
            if (count >= 16) {
                this.data.set('solvedJigsaw', true);
            }
        });
    }

    update(time, delta) {
        // Call the update function of GlobalTimer to update the timer
        GlobalTimer.update(time);
    }

    goToOptionsScene() {
        this.scene.pause();
        this.scene.start('Options', { fromScene: this.scene.key });
        console.log({ fromScene: this.scene.key });
    }
}
