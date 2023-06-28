export default class Puzzle3 extends Phaser.Scene {
    private gotKey;
    private key;
constructor() {
    super({ key: 'puzzleThree' })
     this.gotKey = false;
  }

  create(){
    this.gotKey = this.scene.get('puzzleTwo').data.get('antler'); // gets data from other scene
    if(this.data.get('openedAntlers') == null || this.data.get('solvedRiddle') == null){ // sets starting values once when they are nothing
    this.data.set('openedAntlers', false);
    this.data.set('solvedRiddle', false);
    }
    const Antlers = this.add.image(600,100,'Continue').setInteractive({ useHandCursor: true }); // this will be the moose antlers in game 
    var riddle = this.add.image(400, 300, 'Riddle1').setScale(.5);
    var textEntry = this.add.text(200, 500, 'Start typing...', { font: '32px Courier', color : 'black'});
    textEntry.visible = false;

    if(this.data.get('openedAntlers')){ // used for saving progress after switching scenes
        console.log("opened key");
        riddle.destroy();
        riddle = this.add.image(400, 300, 'Riddle2').setScale(.5);
        textEntry.visible = true;
        Antlers.disableInteractive();
        Antlers.setAlpha(0.5);

        if(this.data.get('solvedRiddle')){ // used for saving progress after switching scenes
            textEntry.visible = true;
            this.key = this.add.image(250, 400, 'Key1');
            this.key.setScale(0.1,0.1);
            textEntry.visible = false;
         }
    
    }

   
    //if click antlers with key show next riddle
    Antlers.on('pointerdown', ()=> { 
        if(this.gotKey){
           Antlers.disableInteractive();
           Antlers.setAlpha(0.5);
           this.data.set('openedAntlers', true);
           riddle.destroy();
           riddle = this.add.image(400, 300, 'Riddle2').setScale(.5);
           textEntry.visible = true;
        }
    });

    // Add text  if nit is gem remove and give key else if its to big or they hit enter give key
    this?.input?.keyboard?.on('keydown', event =>
    {
        if (textEntry.text == 'Enter Text Here:')
        {
            textEntry.text = '';
        }
        
        if (event.keyCode === 8 && textEntry.text.length > 0) // backspace
        {
            textEntry.text = textEntry.text.substring(0, textEntry.text.length - 1);
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))//Alphanumeric or space
        {
            textEntry.text += event.key;
        }

        if(textEntry.text.toLowerCase() == 'gem'){
            this.data.set('solvedRiddle', true);
            textEntry.visible = false;
            this.key = this.add.image(250, 400, 'Key1');
            this.key.setScale(0.1,0.1);
           }
        else if(textEntry.text.length > 3 || event.keyCode === 13){ //enter
            textEntry.text = '';
           }
    });


    var Return = this.add.image(95, 40, 'Return').setInteractive().on('pointerdown', ()=> {
        this.scene.start('puzzle3-4');//This is meant to change pages
    })
  }
}