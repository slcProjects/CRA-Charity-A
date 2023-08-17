/*! For license information please see main.bad0e5c86fd27e998ffc.bundle.js.LICENSE.txt */
(()=>{var e,t={638:(e,t,s)=>{"use strict";s(260);let i=0,a=0,n=!1;function o(){i=0,a=0,n=!1}const r={update:function(e){!0===n?(0===a&&(a=e),i+=(e-a)/1e3,a=e):!1===n&&console.log("It's Off")},getTimer:function(){return i},formatTime:function(e){const t=Math.floor(e/60),s=Math.floor(e%60);return`${t} ${g.selectedLanguage,"minutes"} ${s} ${"English"===g.selectedLanguage?"seconds":"secondes"}`},startTimer:function(){o(),n=!0},resetTimer:o},h={font:"bold 28px Arial",fill:"#FFFFFF",align:"center"},l={font:"bold 32px Arial",fill:"#000000",align:"center"},c={font:"bold 28px Arial",fill:"#000000",align:"center"},d={fontFamily:"Arial",fontSize:"24px",color:"#000000",align:"center",wordWrap:{width:300}};class g extends Phaser.Scene{constructor(){super({key:"MainScene"}),g.selectedLanguage="English"}create(){const e=this.add.image(0,0,"MainMenu");e.setOrigin(.5),e.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),e.setScale(this.cameras.main.width/e.width,this.cameras.main.height/e.height),this.input.keyboard.on("keydown-ESC",this.goToOptionsScene,this),this.add.image(645,360,"StartGameEngButton").setInteractive().on("pointerdown",this.buttonClicked,this),this.add.rectangle(this.cameras.main.centerX,460,150,50,0,0).setInteractive(),this.languageButton=this.add.image(this.cameras.main.centerX,460,"LanguageButton").setInteractive(),this.languageButton.on("pointerdown",this.toggleLanguage,this),this.languageImage=this.add.image(this.cameras.main.centerX,450,"EnglishB"),this.languageImage.setTint(16777215),this.languageText=this.add.text(this.cameras.main.centerX,500,"",l),this.languageText.setOrigin(.5),"English"===g.selectedLanguage?this.languageText.setText("This option cannot be switched in-game"):"French"===g.selectedLanguage&&this.languageText.setText("Cette option ne peut pas être changée en cours de partie"),this.bottomLeftText=this.add.text(10,this.cameras.main.height-10,"Press Esc to access timer/options menu",{font:"16px Arial",color:"#ffffff",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:{x:10,y:5}}),this.bottomLeftText.setOrigin(0,1)}toggleLanguage(){"English"===g.selectedLanguage?(g.selectedLanguage="French",this.languageImage.setTexture("FrenchB"),this.bottomLeftText.setText("Appuyez sur Échap pour accéder à votre menu d’options et voir votre temps")):"French"===g.selectedLanguage&&(g.selectedLanguage="English",this.languageImage.setTexture("EnglishB"),this.bottomLeftText.setText("Press Esc to access your options menu and see your time")),"English"===g.selectedLanguage?this.languageText.setText("This option cannot be switched in-game"):"French"===g.selectedLanguage&&this.languageText.setText("Cette option ne peut pas être modifiée pendant le jeu")}buttonClicked(){"English"===g.selectedLanguage?console.log("Starting the game in English"):"French"===g.selectedLanguage&&console.log("Starting the game in French"),this.scene.start("storyScene")}update(e,t){r.update(e)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}}g.selectedLanguage="English";class u{static increaseVolume(){this.volumePercentage=Phaser.Math.Clamp(this.volumePercentage+10,0,100)}static decreaseVolume(){this.volumePercentage=Phaser.Math.Clamp(this.volumePercentage-10,0,100)}static setGlobalVolume(e){this.globalVolume=e}static getGlobalVolume(){return this.globalVolume}static getVolume(){return this.volumePercentage}}u.volumePercentage=50,u.globalVolume=.5;class m extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){this.load.image("phaser-logo","assets/img/phaser-logo.png"),this.load.image("EnglishB","./assets/img/englishButton.png"),this.load.image("FrenchB","./assets/img/frenchButton.png"),this.load.image("End","./assets/img/endingImage.png"),this.load.image("StartGameEngButton","./assets/img/Start-Game-Eng.png"),this.load.image("MainMenu","./assets/img/MainMenu.jpg"),this.load.image("Key1","./assets/img/PZ1-Key.png"),this.load.image("Key2","./assets/img/PZ2-Key.png"),this.load.image("LeftArrow","./assets/img/LeftArrow.png"),this.load.image("LeftArrowSelected","./assets/img/LeftArrowSelected.png"),this.load.image("RightArrow","./assets/img/RightArrow.png"),this.load.image("RightArrowSelected","./assets/img/RightArrowSelected.png"),this.load.image("Continue","./assets/img/Continue.png"),this.load.image("Return","./assets/img/return.png"),this.load.image("Riddle2","./assets/img/Riddle2.png"),this.load.image("Riddle1","./assets/img/Riddle1.png"),this.load.image("Riddle1Fr","./assets/img/Riddle1Fr.png"),this.load.image("Riddle2Fr","./assets/img/Riddle2Fr.png"),this.load.image("bottleA","./assets/img/bottleA.png"),this.load.image("bottleB","./assets/img/bottleB.png"),this.load.image("bottleC","./assets/img/bottleC.png"),this.load.image("lobby","./assets/img/Lobby.png"),this.load.image("lobbyH","./assets/img/LobbyHighlight.png"),this.load.image("lobbyHR","./assets/img/LobbyHighlightR.png"),this.load.image("lobbyHF","./assets/img/LobbyHF.png"),this.load.image("FirePit","./assets/img/FirePit.png"),this.load.image("leftArrowHint","./assets/img/leftArrowHint.png"),this.load.image("rightArrowHint","./assets/img/rightArrowHint.png"),this.load.image("closeButton","./assets/img/closeButton.png"),this.load.image("closeButton","./assets/img/closeButton.png"),this.load.image("hintsButton","/assets/img/hintsButton.png"),this.load.image("StoryImage","/assets/img/StoryImage.png"),this.load.image("Books","/assets/img/BookShelf.png"),this.load.image("lobby3-4","/assets/img/Lobby3-4.png"),this.load.image("Kitchen","/assets/img/Kitchen.png"),this.load.image("KitchenH","/assets/img/KitchenH.png"),this.load.image("KitchenHR","/assets/img/KitchenHR.png"),this.load.image("KitchenM","/assets/img/KitchenM.png"),this.load.image("lobby3-4Cannoe","/assets/img/Lobby3-4Cannoe.png"),this.load.image("lobby3-4CannoeR","/assets/img/Lobby3-4CannoeR.png"),this.load.image("lobby3-4Antlers","/assets/img/Lobby3-4Antlers.png"),this.load.image("Options","/assets/img/options.png"),this.load.image("FinalKey","./assets/img/FinalKey.png"),this.load.image("Paper","./assets/img/Paper.png"),this.load.image("PaperH","./assets/img/PaperH.png"),this.load.image("moose","/assets/img/Moose.png"),this.load.image("canoe","/assets/img/Canoe.png"),this.load.image("flag","/assets/img/flag.png"),this.load.image("flagFrench","/assets/img/flagFrench.png"),this.load.image("endingImage","/assets/img/endingImage.png"),this.load.image("Enter","./assets/img/Enter.png"),this.load.image("Pz2PImg1","/assets/img/Pz2Img1.png"),this.load.image("Pz2PImg2","/assets/img/Pz2Img2.png"),this.load.image("Pz2PImg3","/assets/img/Pz2Img3.png"),this.load.image("Pz2PImg4","/assets/img/Pz2Img4.png"),this.load.image("Pz2PImg5","/assets/img/Pz2Img5.png"),this.load.image("Pz2PImg6","/assets/img/Pz2Img6.png");for(var e=1;e<=6;e++)this.load.audio("Song"+e,"/assets/Music/Song"+e+".mp3")}create(){this.playRandomSong(),this.scene.start("MainScene")}playRandomSong(){const e=Phaser.Math.Between(1,6);this.sound.add("Song"+e,{volume:u.getVolume()/100,loop:!0}).play()}}function p(e){return function(){const t=this,s=t.add.container(990,210);s.setVisible(!1),s.setDepth(2);const i=t.add.rectangle(0,0,570,285,15658734);i.setOrigin(.5),i.setDepth(1),s.add(i);const a=t.add.text(0,-30,"",{fontFamily:"Arial",fontSize:"24px",color:"#000000",align:"center",wordWrap:{width:500,useAdvancedWrap:!0}}).setOrigin(.5).setDepth(2);s.add(a);const n=t.add.image(-100,80,"leftArrowHint").setInteractive().on("pointerdown",(function(){h=(h-1+e.length)%e.length,l()}),this);s.add(n);const o=t.add.image(100,80,"rightArrowHint").setInteractive().on("pointerdown",(function(){h=(h+1)%e.length,l()}),this);s.add(o);const r=t.add.image(255,-120,"closeButton").setInteractive().on("pointerdown",(function(){s.setVisible(!1)}),this);s.add(r),r.setScale(.6);let h=0;function l(){a.setText(e[h])}t.add.image(1250,30,"hintsButton").setInteractive().setTint(7829367).setScale(.5).setOrigin(1,0).setDepth(1).on("pointerdown",(function(){s.setVisible(!0),l()})),i.displayWidth*=.95,i.displayHeight*=.95}}class v extends Phaser.Scene{constructor(){super({key:"puzzleOne"}),this.code="",this.buttonsPressed=0,this.correctCode="5839"}create(){var e;const t=this.add.image(0,0,"FirePit");t.setOrigin(.5),t.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),t.setScale(this.cameras.main.width/t.width,this.cameras.main.height/t.height),this.add.image(95,40,"Return").setInteractive().on("pointerdown",(()=>{this.scene.start("MainGame")}));const s="English"===g.selectedLanguage?["Hint 1: Try reading the paper.","Hint 2: Read the paper closely, it might be helpful.","Hint 3: It seems the code is a 4-digit combination."]:["Indice 1 : Essayez de lire le papier.","Indice 2 : Lisez attentivement le papier, cela pourrait être utile.","Indice 3 : Le code semble être une combinaison de 4 chiffres."];p.call(this,s).call(this),this.key=this.add.image(600,400,"Key1"),this.key.setScale(.1,.1),this.key.setAlpha(0),this.key.setInteractive({useHandCursor:!0}),this.key.on("pointerdown",(()=>{this.scene.start("MainGame")}));const i=[];for(let e=1;e<=9;e++){const t=this.add.text(230+(e-1)%3*100,80+80*Math.floor((e-1)/3),e.toString(),{fontFamily:"Arial",fontSize:"32px",color:"#000000"});t.setOrigin(.5),t.setInteractive({useHandCursor:!0}),t.on("pointerup",(()=>{this.onButtonPress(t)})),i.push(t)}null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this);const a=this.add.image(1150,500,"Paper").setInteractive();a.setScale(.35),a.on("pointerover",(()=>{a.setTexture("PaperH")})),a.on("pointerout",(()=>{a.setTexture("Paper")})),a.on("pointerdown",(()=>{this.scene.start("paperScene")}))}onButtonPress(e){this.buttonsPressed++,this.code+=e.text,console.log(e.text),this.disableButton(e),4===this.buttonsPressed&&(this.code===this.correctCode?(this.key.setAlpha(1),this.data.set("fireKey",!0)):this.resetButtons())}returnToPreviousScene(){this.scene.start("puzzleOne")}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}update(e,t){r.update(e)}disableButton(e){e.disableInteractive(),e.setAlpha(.5)}resetButtons(){this.children.getAll().forEach((e=>{this.enableButton(e)})),this.buttonsPressed=0,this.code="",this.key.setAlpha(0)}enableButton(e){e.setInteractive({useHandCursor:!0}),e.setAlpha(1)}}class y extends Phaser.Scene{constructor(){super({key:"storyScene"})}create(){var e;const t=this.add.image(0,0,"StoryImage");null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this),t.setOrigin(.5),t.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),t.setScale(this.cameras.main.width/t.width,this.cameras.main.height/t.height);const s="English"===g.selectedLanguage?["In the remote Canadian wilderness, you stand before an old winter cabin,","its mystique beckoning you to explore its secrets. As you step inside, ","seeking adventure, you unwittingly trigger a mechanism that seals you inside, ","leaving you trapped within its icy embrace. With the fire slowly dwindling, ","casting flickering shadows across the room, you realize that time is against you."]:["Au cœur de la nature sauvage canadienne, vous vous tenez devant une vieille cabane d'hiver,","sa mystique vous invite à explorer ses secrets. En entrant, cherchant l'aventure,","vous déclenchez involontairement un mécanisme qui vous enferme à l'intérieur, ","vous laissant piégé dans son étreinte glacée. Avec le feu qui diminue lentement, ","projetant des ombres vacillantes dans la pièce, vous réalisez que le temps joue contre vous."],i="English"===g.selectedLanguage?this.cameras.main.centerX-500:this.cameras.main.centerX-620,a=this.cameras.main.centerY-200;this.add.text(i,a+-100,s,h),this.add.image(1165,680,"Continue").setInteractive().on("pointerdown",this.buttonClicked,this)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}buttonClicked(){this.scene.start("MainGame")}}class f extends Phaser.Scene{constructor(){super({key:"MainGame"}),this.counter=0,this.resetGame=!1}create(){var e;!0===this.resetGame&&(this.counter=0,console.log("Game has been reset"),this.resetGame=!1),0===this.counter?(r.startTimer(),this.counter+=1):console.log("U CAN'T ENTER");const t=this.add.image(0,0,"lobby");t.setOrigin(.5),t.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),t.setScale(this.cameras.main.width/t.width,this.cameras.main.height/t.height),null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this),this.key1=this.scene.get("puzzleOne").data.get("fireKey"),null==this.data.get("antler")&&this.data.set("antler",!1);var s=this.add.image(50,360,"LeftArrow").setInteractive({useHandCursor:!0}).on("pointerdown",(()=>{this.scene.start("puzzle3-4")}));const i=this.add.rectangle(this.cameras.main.width/2,this.cameras.main.height/2,280,145);i.x=780,i.y=435,i.setInteractive({useHandCursor:!0}),i.on("pointerup",(()=>{this.scene.start("puzzleOne")})),i.on("pointerover",(()=>{t.setTexture("lobbyHF")})),i.on("pointerout",(()=>{t.setTexture("lobby")}));const a=this.add.rectangle(this.cameras.main.width/2,this.cameras.main.height/2,300,290);a.x=370,a.y=350,a.setInteractive({useHandCursor:!0}),a.on("pointerup",(()=>{this.key1&&this.scene.start("puzzleTwo")})),a.on("pointerover",(()=>{this.key1?t.setTexture("lobbyH"):t.setTexture("lobbyHR")})),a.on("pointerout",(()=>{t.setTexture("lobby")})),s.setScale(2,2),s.on("pointerover",(()=>{s.setTexture("LeftArrowSelected")})),s.on("pointerout",(()=>{s.setTexture("LeftArrow")}));var n=this.add.image(1230,360,"RightArrow").setInteractive({useHandCursor:!0}).on("pointerdown",(()=>{this.scene.start("puzzle5-6")}));n.setScale(2,2),n.on("pointerover",(()=>{n.setTexture("RightArrowSelected")})),n.on("pointerout",(()=>{n.setTexture("RightArrow")}))}updateBooleanValue(e){this.resetGame=e}update(e,t){r.update(e)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}}class b extends Phaser.Scene{constructor(){super({key:"puzzleTwo"}),this.symbolButtons=[],this.selectedSymbols=[],this.correctOrder=[4,1,3,5,2,0],this.symbolButtonActivated=[]}create(){var e;const t=this.add.image(0,0,"Books");t.setOrigin(.5),t.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),t.setScale(this.cameras.main.width/t.width,this.cameras.main.height/t.height),p.call(this,"English"===g.selectedLanguage?["Hint 1: Read The paper.","Hint 2: Maybe the images have something to do with the puzzle.","Hint 3: Try thinking of the first letter and number of images."]:["Indice 1: Lisez le papier.","Indice 2: Peut-être que les images ont un rapport avec le puzzle.","Indice 3: Essayez de penser à la première lettre et au nombre d'images. (En anglais)"]).call(this),null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this),this.add.image(95,40,"Return").setInteractive().on("pointerdown",(()=>{this.scene.start("MainGame")}));var s=this.add.image(1150,500,"Paper").setInteractive().on("pointerdown",(()=>{this.scene.start("paperIScene")}));s.setScale(.35),s.on("pointerover",(()=>{s.setTexture("PaperH")})),s.on("pointerout",(()=>{s.setTexture("Paper")}));const i=["△","C","8","●","A","4"],a=[285,395,490,645,653,570],n=[210,210,210,210,400,400],o=[50,36,40,65,40,35],r=[170,170,170,170,160,160];for(let e=0;e<i.length;e++){const t=this.add.rectangle(a[e],n[e],o[e],r[e]).setInteractive(),s=this.add.text(a[e],n[e],i[e],{font:"bold 14px Arial",color:"#000000",wordWrap:{width:60},align:"center"});s.setOrigin(.5),0===e&&s.setStyle({fontSize:"24px"}),3===e&&s.setStyle({fontSize:"30px"}),this.symbolButtonActivated[e]=!0,t.on("pointerup",(()=>{this.symbolButtonActivated[e]&&(this.highlightSymbol(t),this.selectedSymbols.push(e),this.symbolButtonActivated[e]=!1,this.selectedSymbols.length===this.correctOrder.length&&(this.checkPuzzleOrder()?this.revealSecretCompartment():this.resetSymbols()))})),this.symbolButtons.push(t)}}highlightSymbol(e){e.setStrokeStyle(2,16711680)}resetSymbols(){this.symbolButtons.forEach(((e,t)=>{e.setStrokeStyle(0,0),this.symbolButtonActivated[t]=!0})),this.selectedSymbols=[]}checkPuzzleOrder(){return JSON.stringify(this.selectedSymbols)===JSON.stringify(this.correctOrder)}revealSecretCompartment(){this.secretCompartment||(this.secretCompartment=this.add.image(1e3,100,"Key2"),this.secretCompartment.setInteractive({useHandCursor:!0}),this.secretCompartment.on("pointerdown",(()=>{var e;null===(e=this.secretCompartment)||void 0===e||e.destroy(),this.data.set("antler",!0)})),this.secretCompartment.setScale(.5))}update(e,t){r.update(e)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}}class S extends Phaser.Scene{constructor(){super({key:"puzzleThree"}),this.gotKey=!1,this.key=!1}create(){var e,t,s;const i=this.add.image(0,0,"moose");i.setOrigin(.5),i.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),i.setScale(this.cameras.main.width/i.width,this.cameras.main.height/i.height),p.call(this,"English"===g.selectedLanguage?["Hint 1: The Key is in a different room","Hint 2: Often perceived as valuable","Hint 3: Used to make jewelry"]:["Indice 1: La clé est dans une pièce différente","Indice 2: Souvent perçue comme précieuse","Indice 3: Utilisée pour fabriquer des bijoux"]).call(this),this.gotKey=this.scene.get("puzzleTwo").data.get("antler"),null!=this.data.get("openedAntlers")&&null!=this.data.get("solvedRiddle")||(this.data.set("openedAntlers",!1),this.data.set("solvedRiddle",!1));const a=this.add.rectangle(420,200,50,50).setInteractive({useHandCursor:!0}),n="English"===g.selectedLanguage?"Riddle1":"Riddle1Fr",o="English"===g.selectedLanguage?"Riddle2":"Riddle2Fr";var r=this.add.image(900,300,n).setScale(.5);let h=this.add.image(850,500,"Key1").setScale(.1,.1).setInteractive().setVisible(!1);var l=this.add.text(850,500,"Start typing...",{font:"32px Courier",color:"black"});l.visible=!1,null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this),this.data.get("openedAntlers")&&(r.destroy(),r=this.add.image(900,300,o).setScale(.5),l.visible=!0,a.disableInteractive(),a.setAlpha(.5),this.data.get("solvedRiddle")&&(l.visible=!0,this.key||h.setVisible(!0),l.visible=!1)),h.on("pointerdown",(()=>{h.destroy(),this.key=!0})),a.on("pointerdown",(()=>{this.gotKey&&(a.disableInteractive(),a.setAlpha(.5),this.data.set("openedAntlers",!0),r.destroy(),r=this.add.image(900,300,o).setScale(.5),l.visible=!0)})),null===(s=null===(t=null==this?void 0:this.input)||void 0===t?void 0:t.keyboard)||void 0===s||s.on("keydown",(e=>{"Start typing..."==l.text&&(l.text=""),8===e.keyCode&&l.text.length>0?l.text=l.text.substring(0,l.text.length-1):(32===e.keyCode||e.keyCode>=48&&e.keyCode<90)&&(l.text+=e.key),"gem"==l.text.toLowerCase()||"bijou"==l.text.toLowerCase()?(this.data.set("solvedRiddle",!0),l.visible=!1,h.visible=!0):(l.text.length>5||13===e.keyCode)&&(l.text="")})),this.add.image(95,40,"Return").setInteractive().on("pointerdown",(()=>{this.scene.start("puzzle3-4")}))}update(e,t){r.update(e)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}}class w extends Phaser.Scene{constructor(){super({key:"puzzle3-4"})}create(){var e;const t=this.add.image(0,0,"lobby3-4");t.setOrigin(.5),t.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),t.setScale(this.cameras.main.width/t.width,this.cameras.main.height/t.height),null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this);const s=this.add.rectangle(this.cameras.main.width/2,this.cameras.main.height/2,660,100);s.x=630,s.y=520,this.gotKey=this.scene.get("puzzleThree").data.get("solvedRiddle"),s.setInteractive(),s.on("pointerup",(()=>{this.gotKey&&this.scene.start("puzzleSeven")})),s.on("pointerover",(()=>{this.gotKey?t.setTexture("lobby3-4Cannoe"):t.setTexture("lobby3-4CannoeR")})),s.on("pointerout",(()=>{t.setTexture("lobby3-4")}));const i=this.add.rectangle(this.cameras.main.width/2,this.cameras.main.height/2,285,215);i.x=1020,i.y=350,i.setInteractive({useHandCursor:!0}),i.on("pointerup",(()=>{this.scene.start("puzzleThree")})),i.on("pointerover",(()=>{t.setTexture("lobby3-4Antlers")})),i.on("pointerout",(()=>{t.setTexture("lobby3-4")}));var a=this.add.image(1230,360,"RightArrow").setInteractive({useHandCursor:!0}).on("pointerdown",(()=>{this.scene.start("MainGame")}));a.setScale(2,2),a.on("pointerover",(()=>{a.setTexture("RightArrowSelected")})),a.on("pointerout",(()=>{a.setTexture("RightArrow")}))}update(e,t){r.update(e)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}}class x extends Phaser.Scene{constructor(){super({key:"puzzle5-6"})}create(){var e;const t=this.add.image(0,0,"Kitchen");t.setOrigin(.5),t.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),t.setScale(this.cameras.main.width/t.width,this.cameras.main.height/t.height),null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this);var s=this.add.image(50,360,"LeftArrow").setInteractive().on("pointerdown",(()=>{this.scene.start("MainGame")}));const i=this.add.rectangle(this.cameras.main.width/2,this.cameras.main.height/2,250,100);i.x=510,i.y=285,this.lastKey=this.scene.get("puzzleSeven").data.get("solvedJigsaw"),i.setInteractive(),i.on("pointerup",(()=>{this.lastKey&&this.scene.start("puzzleFive")})),i.on("pointerover",(()=>{this.lastKey?t.setTexture("KitchenH"):t.setTexture("KitchenHR")})),i.on("pointerout",(()=>{t.setTexture("Kitchen")})),s.setScale(2,2),s.on("pointerover",(()=>{s.setTexture("LeftArrowSelected")})),s.on("pointerout",(()=>{s.setTexture("LeftArrow")}))}update(e,t){r.update(e)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}}class T extends Phaser.Scene{constructor(){super({key:"puzzleFive"})}create(){var e;p.call(this,"English"===g.selectedLanguage?["Hint 1: You can drag and drop the bottles.","Hint 2: Put the Bottles in the boxes.","Hint 3: Put the Bottles in the correct order."]:["Indice 1: Vous pouvez faire glisser et déposer les bouteilles.","Indice 2: Placez les bouteilles dans les boîtes.","Indice 3: Placez les bouteilles dans le bon ordre."]).call(this),this.add.image(95,40,"Return").setInteractive({useHandCursor:!0}).on("pointerdown",(()=>{this.scene.start("puzzle5-6")}));const t=this.add.image(0,0,"KitchenM");t.setOrigin(.5),t.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),t.setScale(this.cameras.main.width/t.width,this.cameras.main.height/t.height);const s=this.add.image(783,500,"FinalKey");s.setScale(.07),s.setAlpha(0);const i=(e,t)=>this.add.rectangle(e,t,100,100,0).setStrokeStyle(2,0).setInteractive().setData("id",null).setFillStyle(16777215,0);this.add.image(95,40,"Return").setInteractive().on("pointerdown",(()=>{this.scene.start("puzzle5-6")}));const a="English"===g.selectedLanguage?"Bottle B: 'Lighter than C.'":"Bouteille B:'Plus légère que C.'",n="English"===g.selectedLanguage?"Bottle C: 'Heavier than A.'":"Bouteille C:'Plus lourde que A.'",o="English"===g.selectedLanguage?"Bottle A: 'Heavier than B.'":"Bouteille A:'Plus lourde que B.'",r="English"===g.selectedLanguage?"Arrange the bottles from heaviest to lightest":"Organiser les bouteilles du plus lourd au plus léger";this.add.text(750,500,a,d),this.add.text(750,550,n,d),this.add.text(750,600,o,d),this.add.text(770,430,r,d),null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this);const h=i(600,175),l=i(800,175),c=i(1e3,175),u=[h,l,c],m=[void 0,void 0,void 0],v=()=>{m.some((e=>!e))||("CAB"===m.map((e=>null==e?void 0:e.getData("id"))).join("")?(console.log("Unlock the next stage!"),this.scene.start("EndScene"),this.scene.get("puzzleSeven").data.set("solvedJigsaw",!1),this.scene.get("puzzleThree").data.set("openedAntlers",!1),this.scene.get("puzzleThree").data.set("solvedRiddle",!1),this.scene.get("puzzleTwo").data.set("antler",!1),this.scene.get("puzzleOne").data.set("fireKey",!1)):console.log("Incorrect order, try again!"))},y=[this.add.image(150,345,"bottleA").setScale(.15).setData("id","A"),this.add.image(300,345,"bottleB").setScale(.15).setData("id","B"),this.add.image(450,345,"bottleC").setScale(.15).setData("id","C")];y.forEach(((e,t)=>{e.setInteractive({draggable:!0}),this.input.setDraggable(e),e.on("dragstart",(()=>{this.children.bringToTop(e)})),e.on("drag",((t,s,i)=>{e.setPosition(s,i)})),e.on("dragend",(s=>{let i=!1;if(u.forEach(((t,s)=>{const a=t.getBounds(),n=e.getBounds();if(Phaser.Geom.Rectangle.Contains(a,n.centerX,n.centerY)){const a=m[s];if(a&&a!==e){const e=this.getOriginalBottlePosition(y.indexOf(a));a.setPosition(e.x,e.y);const t=m.indexOf(a);m[t]=void 0}e.setPosition(t.x,t.y),m[s]=e,t.setData("id",e.getData("id")),i=!0}})),!i){const s=this.getOriginalBottlePosition(t);e.setPosition(s.x,s.y);const i=m.indexOf(e);m[i]=void 0,h.setData("id",null),l.setData("id",null),c.setData("id",null)}(()=>{for(let e=0;e<u.length;e++){u[e];const t=m[e];t&&console.log(`Box${e+1} has ID: ${t.getData("id")}`)}})(),v()}))}))}update(e,t){r.update(e)}getOriginalBottlePosition(e){const t=150+150*e+32;return new Phaser.Math.Vector2(t,345)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}}class P extends Phaser.Scene{constructor(){super("Options"),this.volumePercentage=50}init(e){this.fromScene=e.fromScene}create(){const e=this.add.image(0,0,"Options");e.setOrigin(.5),e.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),e.setScale(this.cameras.main.width/e.width,this.cameras.main.height/e.height),this.pauseMenuContainer=this.add.container(this.cameras.main.width/2,this.cameras.main.height/2),this.pauseMenuContainer.setScrollFactor(0),this.pauseMenuContainer.setDepth(1);const t=this.add.rectangle(0,0,500,600,14540253);this.pauseMenuContainer.add(t);const s=this.add.image(230,-290,"closeButton");s.setOrigin(1,0),s.setInteractive(),s.on("pointerdown",this.returnToPreviousScene,this),this.pauseMenuContainer.add(s),this.volumeText=this.add.text(-240,-260,`Volume:  ${this.volumePercentage}%`,{fontSize:"25px",color:"#000000"}),this.volumeText.setOrigin(0,0),this.pauseMenuContainer.add(this.volumeText),this.timerText=this.add.text(-240,-230,"Time: ",{fontSize:"25px",color:"#000000"}),this.timerText.setOrigin(0,0),this.pauseMenuContainer.add(this.timerText),this.volumeArrowLeft=this.add.image(-140,-230,"leftArrowHint"),this.volumeArrowLeft.setOrigin(0,0),this.volumeArrowLeft.setInteractive(),this.volumeArrowLeft.setScale(.7),this.volumeArrowLeft.setRotation(Phaser.Math.DegToRad(-90)),this.volumeArrowLeft.on("pointerdown",this.onVolumeLeftClicked,this),this.pauseMenuContainer.add(this.volumeArrowLeft),this.volumeArrowRight=this.add.image(-60,-230,"rightArrowHint"),this.volumeArrowRight.setOrigin(0,0),this.volumeArrowRight.setInteractive(),this.volumeArrowRight.setScale(.7),this.volumeArrowRight.setRotation(Phaser.Math.DegToRad(-90)),this.volumeArrowRight.on("pointerdown",this.onVolumeRightClicked,this),this.pauseMenuContainer.add(this.volumeArrowRight),this.events.on("update",this.handleGlobalTimerUpdate,this)}update(e,t){r.update(e)}returnToPreviousScene(){this.scene.start(this.fromScene),console.log(this.fromScene,"ESCAPE"),this.scene.stop()}onVolumeLeftClicked(){u.decreaseVolume(),this.updateVolumeText(),this.updateGlobalVolume()}onVolumeRightClicked(){u.increaseVolume(),this.updateVolumeText(),this.updateGlobalVolume()}updateGlobalVolume(){const e=u.getVolume()/100;this.sound.volume=e,u.setGlobalVolume(e)}updateVolumeText(){this.volumeText&&(this.volumePercentage=u.getVolume(),this.volumeText.setText(`Volume:  ${this.volumePercentage}%`))}handleGlobalTimerUpdate(){const e=r.getTimer(),t=r.formatTime(e),s=`Time: ${t}`,i=`Temps : ${t}`;this.timerText&&this.timerText.setText("English"===g.selectedLanguage?s:i)}}class k extends Phaser.Scene{constructor(){super({key:"puzzleSeven"})}create(){var e,t,s;const i=this.add.image(0,0,"canoe");i.setOrigin(.5),i.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),i.setScale(this.cameras.main.width/i.width,this.cameras.main.height/i.height),null==this.data.get("solvedJigsaw")&&this.data.set("solvedJigsaw",!1),this.add.image(95,40,"Return").setInteractive().on("pointerdown",(()=>{this.scene.start("puzzle3-4")})),p.call(this,"English"===g.selectedLanguage?["Hint 1: Image of a Canadian flag with writing","Hint 2: Try aligning the text and symbols first","Hint 3: They will snap on the background if you are close enough"]:["Indice 1: Image d'un drapeau canadien avec de l'écriture","Indice 2: Essayez d'aligner d'abord le texte et les symboles","Indice 3: Ils se fixeront sur l'arrière-plan si vous êtes assez proche"]).call(this),null===(e=this.input.keyboard)||void 0===e||e.on("keydown-ESC",this.goToOptionsScene,this);var a=45;const n=[],o=[];for(let e=0;e<4;e++){for(let t=0;t<4;t++){var r=this.add.rectangle(1e3+t*a,230+e*a,a,a,8421504);let s;Phaser.Math.Between(-150,150),n.push(r),s="English"===g.selectedLanguage?this.add.image(550,550,"flag").setCrop(a*t,a*e,a,a).setDepth(1).setInteractive(new Phaser.Geom.Rectangle(a*t,a*e,a,a),Phaser.Geom.Rectangle.Contains).setInteractive({useHandCursor:!0}):this.add.image(550,550,"flagFrench").setCrop(a*t,a*e,a,a).setDepth(1).setInteractive(new Phaser.Geom.Rectangle(a*t,a*e,a,a),Phaser.Geom.Rectangle.Contains).setInteractive({useHandCursor:!0}),this.input.setDraggable(s,!0),o.push(s);for(let e=0;e<o.length;e++){const t=Phaser.Math.Between(200,350),s=Phaser.Math.Between(400,550);o.at(e).setPosition(t,s)}}if(this.data.get("solvedJigsaw"))for(let e=0;e<o.length;e++)null===(t=o.at(e))||void 0===t||t.setY(298),null===(s=o.at(e))||void 0===s||s.setX(1068),o.at(e).disableInteractive()}this.input.on("drag",((e,t,s,i)=>{t.x=s,t.y=i})),this.input.on("dragend",(e=>{var t,s;let i=0;for(let e=0;e<o.length;e++)o.at(e).x>=1063&&o.at(e).x<=1073&&o.at(e).y>=293&&o.at(e).y<=303&&(null===(t=o.at(e))||void 0===t||t.setY(298),null===(s=o.at(e))||void 0===s||s.setX(1068),o.at(e).disableInteractive(),i++);i>=16&&this.data.set("solvedJigsaw",!0)}))}update(e,t){r.update(e)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}}class z extends Phaser.Scene{constructor(){super({key:"paperScene"})}create(){this.cameras.main.setBackgroundColor("#e7e4d3");const e="English"===g.selectedLanguage?["There was a family of 5 living in a winter cabin, they enjoyed their simple life,","falling asleep at 8pm every day. One day, there was a break-in,","everyone was okay but they stole 3 important items from them.","Since that day, they secured their belongings with locks and hidden keys,","using puzzles to ensure nothing important could be stolen again.","Eventually, on the 9th of May, the family moved away due to the stress."]:["Il y avait une famille de 5 personnes vivant dans une cabane d'hiver,","ils appréciaient leur vie simple, s'endormant à 8 heures du soir chaque jour. ","Un jour, il y a eu une effraction, tout le famille allait bien,","mais ils ont volé 3 objets importants pour eux. Depuis ce jour,","ils ont sécurisé leurs biens avec des serrures et des clés cachées,","utilisant des énigmes pour s'assurer que rien d'important ne pourrait être volé à nouveau.","Finalement, le 9 mai, la famille a déménagé à cause du stress."],t="English"===g.selectedLanguage?this.cameras.main.centerX:this.cameras.main.centerX+30;this.add.text(t,this.cameras.main.centerY-50,e,c).setOrigin(.5);const s=this.add.image(45,0,"closeButton");s.setOrigin(1,0),s.setInteractive(),s.on("pointerdown",(()=>{s.destroy,this.returnToPreviousScene()}))}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}returnToPreviousScene(){this.scene.start("puzzleOne")}}var C,I,O=function(e,t,s,i,a){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?a.call(e,s):a?a.value=s:t.set(e,s),s},A=function(e,t,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(e):i?i.value:t.get(e)};class E extends Phaser.Scene{constructor(){super({key:"EndScene"}),C.set(this,void 0),I.set(this,void 0)}create(){const e=this.add.image(0,0,"End");e.setOrigin(.5),e.setPosition(this.cameras.main.centerX,this.cameras.main.centerY),e.setScale(this.cameras.main.width/e.width,this.cameras.main.height/e.height);const t="English"===g.selectedLanguage?["You have escaped the old winter cabin in the Canadian wilderness,","you've explored its secrets. As you step outside onto the snow, ","you feel a sense of accomplishment as you have escaped this weird house full of puzzles.","Now you are on a journey to tell your friends about what has occurred.","                                                             ","                                                             ","                                                             ","                                                             ","Created by Marco De Melo and Riley Lawrence-Nebesnuik","French Translations by Marco De Melo"]:["vous avez échappé à la vieille cabane d'hiver dans la nature sauvage canadienne,","vous avez exploré ses secrets. En sortant dans la neige, ","vous ressentez un sentiment d'accomplissement car vous avez échappé,","Cette étrange maison pleine de puzzles. Maintenant,"," vous partez en voyage pour raconter à vos amis ce qui s'est passé.","                                                             ","                                                             ","                                                             ","Créé par Marco De Melo et Riley Lawrence-Nebesnuik","Translation francais par Marco De Melo"],s="English"===g.selectedLanguage?this.cameras.main.centerX-285:this.cameras.main.centerX-435,i=this.cameras.main.centerY-330;var a=this.add.text(s,i,t,h);a.setColor("fad643"),a.setLineSpacing(17),a.setScale(.75),this.add.image(1e3,680,"Continue").setInteractive().on("pointerdown",this.showPopup,this)}showPopup(){var e;O(this,C,this.add.container(0,0),"f");const t=this.add.graphics();t.fillStyle(0,.9),t.fillRect(0,0,this.cameras.main.width,this.cameras.main.height);const s="English"===g.selectedLanguage?`Congratulations!\nYour final time: ${r.formatTime(r.getTimer())}`:`Félicitations !\nVotre temps final : ${r.formatTime(r.getTimer())}`,i=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY-50,s,{fontSize:"24px",color:"#ffffff",align:"center"}).setOrigin(.5),a=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY+10,"English"===g.selectedLanguage?"Enter Name:":"Entrez votre nom :",{fontSize:"18px",color:"#ffffff",align:"center"}).setOrigin(.5);O(this,I,this.add.text(this.cameras.main.centerX,this.cameras.main.centerY+50,"",{fontSize:"16px",backgroundColor:"#ffffff",color:"#000000",padding:{x:10,y:5}}).setOrigin(.5).setInteractive(),"f");const n=this.add.image(this.cameras.main.centerX,this.cameras.main.centerY+100,"Enter").setInteractive();n.on("pointerdown",(()=>{this.handleEnterPressed()})),A(this,C,"f").add([t,i,a,A(this,I,"f"),n]),null===(e=this.input.keyboard)||void 0===e||e.on("keydown",(e=>{A(this,I,"f").text.length<11&&(e.key.match(/^[a-zA-Z0-9\s]$/)?A(this,I,"f").text+=e.key:"Backspace"===e.key&&A(this,I,"f").text.length>0&&(A(this,I,"f").text=A(this,I,"f").text.slice(0,-1)))}))}handleEnterPressed(){const e=this.scene.get("MainGame");e instanceof f&&e.updateBooleanValue(!0);const t=A(this,I,"f").text.trim();""!==t&&(r.update(this.time),console.log(`Name: ${t}\nTime: ${r.formatTime(r.getTimer())}`),r.resetTimer(),this.scene.start("MainScene"))}}C=new WeakMap,I=new WeakMap;class L extends Phaser.Scene{constructor(){super({key:"paperIScene"})}create(){this.cameras.main.setBackgroundColor("#e7e4d3");const e=this.add.image(250,150,"Pz2PImg1"),t=this.add.image(600,150,"Pz2PImg2"),s=this.add.image(900,150,"Pz2PImg3"),i=(this.add.image(250,500,"Pz2PImg4"),this.add.image(600,500,"Pz2PImg5"),this.add.image(900,500,"Pz2PImg6"));e.setScale(.25),t.setScale(.35),s.setScale(1),i.setScale(.3);const a=this.add.image(45,0,"closeButton");a.setOrigin(1,0),a.setInteractive({useHandCursor:!0}),a.on("pointerdown",this.returnToPreviousScene,this)}goToOptionsScene(){this.scene.pause(),this.scene.start("Options",{fromScene:this.scene.key}),console.log({fromScene:this.scene.key})}returnToPreviousScene(){this.scene.start("puzzleTwo")}}const B={type:Phaser.AUTO,backgroundColor:"#ffffff",scale:{parent:"phaser-game",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:1280,height:720},scene:[m,g,f,y,v,b,S,w,x,T,k,P,z,E,L],physics:{default:"arcade",arcade:{debug:!1,gravity:{y:400}}}};window.addEventListener("load",(()=>{new Phaser.Game(B)})),document.title="Maple Mysteries: Quest for the Northern Puzzle"},204:()=>{console.log("%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template","background: #ff0000","background: #ffff00","background: #00ff00","background: #00ffff","color: #fff; background: #000000;","background: none")}},s={};function i(e){var a=s[e];if(void 0!==a)return a.exports;var n=s[e]={exports:{}};return t[e].call(n.exports,n,n.exports,i),n.exports}i.m=t,e=[],i.O=(t,s,a,n)=>{if(!s){var o=1/0;for(c=0;c<e.length;c++){for(var[s,a,n]=e[c],r=!0,h=0;h<s.length;h++)(!1&n||o>=n)&&Object.keys(i.O).every((e=>i.O[e](s[h])))?s.splice(h--,1):(r=!1,n<o&&(o=n));if(r){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,a,n]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,s)=>{var a,n,[o,r,h]=s,l=0;if(o.some((t=>0!==e[t]))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(h)var c=h(i)}for(t&&t(s);l<o.length;l++)n=o[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(c)},s=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),i.O(void 0,[216],(()=>i(638)));var a=i.O(void 0,[216],(()=>i(204)));a=i.O(a)})();