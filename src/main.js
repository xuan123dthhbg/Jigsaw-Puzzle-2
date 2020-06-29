class main extends Phaser.Scene {
    constructor (){
        super("main");
    }
    
    loadButton(sceneName){
        var backbtn = sceneName.add.image(755, 140, "backbtn");
        backbtn.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
           sceneName.sound.play("clicksound", {loop: false});
           sceneName.add.image(755, 140, "backbtn_right");
           setTimeout(() => sceneName.scene.start("menu"), 100)
        },sceneName);

        var settingbtn = sceneName.add.image(755, 200, "settingbtn");
        settingbtn.setInteractive({useHandCursor:true}).on('pointerdown', function(){
            sceneName.sound.play("clicksound", {loop: false});
            var playbtn = sceneName.add.image(755, 200, "settingbtn_right")
        }, sceneName)

        var pausebtn = sceneName.add.image(755, 260, "pausebtn")
        pausebtn.setInteractive({useHandCursor:true}).on('pointerdown', function(){
            sceneName.sound.play("clicksound", {loop: false});
            var playbtn = sceneName.add.image(755, 260, "playbtn")
            playbtn.setInteractive({useHandCursor:true}).on('pointerdown', function(){
                sceneName.sound.play("clicksound", {loop: false});
                playbtn.destroy();
                playbtn = null;
            }, sceneName)
        }, sceneName)

        var helpbtn = sceneName.add.image(755, 320, "helpbtn");

        var haveImg = false;
        helpbtn.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            if (haveImg == false){
                sceneName.sound.play("clicksound", {loop: false});
                setTimeout(() => sceneName.orginpicture = sceneName.add.image(game.config.width/2 - 200, game.config.height/2 - 117.5,"originpicture").setOrigin(0), 100);
                haveImg = true;
            } else{
                sceneName.sound.play("clicksound", {loop: false});
                sceneName.orginpicture.destroy();
                sceneName.originpicture = null;
                haveImg = false;
            } 
        },sceneName);

        var musiconbtn = sceneName.add.image(755, 380, "musicon");
        var haveMusic = true;
        musiconbtn.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            if (haveMusic == true){
                sceneName.sound.play("clicksound", {loop: false});
                setTimeout(() => sceneName.musicoffbtn = sceneName.add.image(755, 380, "musicoff"), 100);
                haveMusic = false;
                sceneName.sound.stop("clicksound");
            } else {
                sceneName.sound.play("clicksound", {loop: false});
                sceneName.musicoffbtn.destroy();
                sceneName.musicoffbtn = null;
                haveMusic = true;
            }
        },sceneName);
    }
    loadImg(sceneName){
        var frame = sceneName.add.image(0,0, "frame");
        frame.setOrigin(0);
        var framepicture = sceneName.add.image(game.config.width/2 -360/2 + 40, game.config.height/2 - 252/2 - 10,"framepicture");
        framepicture.setOrigin(0);
        var framepiece = sceneName.add.image(game.config.width/2 -360/2 - 80, game.config.height/2 - 252/2 - 10,"framepiece").setOrigin(0);
    }


    loadPieces(sceneName, atlas, num, x){
        var location = [[game.config.width/2 -360/2 - 73, game.config.height/2 - 252/2 - 3],
        [game.config.width/2 -360/2 - 73, game.config.height/2 - 252/2 - 3 + 65],
        [game.config.width/2 -360/2 - 73, game.config.height/2 - 252/2 - 3 + 129],
        [game.config.width/2 -360/2 - 73, game.config.height/2 - 252/2 - 3 + 193]
    ]
        var index_img=[];
        for(var i=1; i<=num; i++){
            index_img[i-1]=i;
        }
        index_img=this.shuffle(index_img);
        for(let i=0; i<4; i++){
            sceneName.add.image(location[i][0],location[i][1],atlas,index_img[i]).setScale(x);
        }
        
        
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
}