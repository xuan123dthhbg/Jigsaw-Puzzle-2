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
        
            var pic1 = sceneName.add.image(location[0][0],location[0][1],atlas,index_img[0]).setScale(x);
            var pic2 = sceneName.add.image(location[1][0],location[1][1],atlas,index_img[1]).setScale(x);
            var pic3 = sceneName.add.image(location[2][0],location[2][1],atlas,index_img[2]).setScale(x);
            var pic4 = sceneName.add.image(location[3][0],location[3][1],atlas,index_img[3]).setScale(x);

            pic1.setName('1');
            pic2.setName('2');
            pic3.setName('3');
            pic4.setName('4');

            this.piecesDrag(sceneName, pic1);
            this.piecesDrag(sceneName, pic2);
            this.piecesDrag(sceneName, pic3);
            this.piecesDrag(sceneName, pic4);

            this.piecesDrop(sceneName, 0, 0, '1');
            this.piecesDrop(sceneName, 180, 126, '4');
            this.piecesDrop(sceneName, 180, 0, '2');
            this.piecesDrop(sceneName, 0, 126, '3');
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

    piecesDrag(sceneName, image){
        image.setInteractive();
        sceneName.input.setDraggable(image);
        image.on('dragstart', function (pointer, gameObject) {
            image.setScale(1);
        });
        sceneName.input.on('dragstart', function (pointer, gameObject) {
            sceneName.children.bringToTop(gameObject);
        }, sceneName);

        sceneName.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }

    piecesDrop (sceneName, x, y, name){
        var zone = sceneName.add.zone(348 + x, 143 + y, 180, 126).setRectangleDropZone(180,126).setInteractive();
        zone.setName(name);
        sceneName.input.on('drop', function (pointer, gameObject, dropZone) {
            if (dropZone.name === gameObject.name) {
                gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;
                gameObject.input.enabled = false;
                
            }
            console.log(dropZone.name, gameObject.name);
            
        });
    }
    
}