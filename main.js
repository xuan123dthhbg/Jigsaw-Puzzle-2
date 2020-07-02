class main extends Phaser.Scene {
    constructor() {
        super("main");
    }

    loadButton(sceneName) {
        var backbtn = sceneName.add.image(755, 140, "backbtn");
        backbtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            sceneName.sound.play("clicksound", {loop: false});
            sceneName.add.image(755, 140, "backbtn_right");
            setTimeout(() => sceneName.scene.start("menu"), 100)
        }, sceneName);

        var settingbtn = sceneName.add.image(755, 200, "settingbtn");
        settingbtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            sceneName.sound.play("clicksound", {loop: false});
            var playbtn = sceneName.add.image(755, 200, "settingbtn_right")
        }, sceneName)

        var pausebtn = sceneName.add.image(755, 260, "pausebtn")
        pausebtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            sceneName.sound.play("clicksound", {loop: false});
            var playbtn = sceneName.add.image(755, 260, "playbtn")
            playbtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
                sceneName.sound.play("clicksound", {loop: false});
                playbtn.destroy();
                playbtn = null;
            }, sceneName)
        }, sceneName)

        var helpbtn = sceneName.add.image(755, 320, "helpbtn");

        var haveImg = false;
        helpbtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            if (haveImg == false) {
                sceneName.sound.play("clicksound", {loop: false});
                setTimeout(() => sceneName.orginpicture = sceneName.add.image(game.config.width / 2 - 200, game.config.height / 2 - 117.5, "originpicture").setOrigin(0), 100);
                haveImg = true;
            } else {
                sceneName.sound.play("clicksound", {loop: false});
                sceneName.orginpicture.destroy();
                sceneName.originpicture = null;
                haveImg = false;
            }
        }, sceneName);

        var musiconbtn = sceneName.add.image(755, 380, "musicon");
        var haveMusic = true;
        musiconbtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            if (haveMusic == true) {
                sceneName.sound.play("clicksound", {loop: false});
                setTimeout(() => sceneName.musicoffbtn = sceneName.add.image(755, 380, "musicoff"), 100);
                haveMusic = false;

            } else {
                sceneName.sound.play("clicksound", {loop: false});
                sceneName.musicoffbtn.destroy();
                sceneName.musicoffbtn = null;
                haveMusic = true;

            }
        }, sceneName);

    }

    loadImg(sceneName) {
        var frame = sceneName.add.image(0, 0, "frame");
        frame.setOrigin(0);
        var framepicture = sceneName.add.image(game.config.width / 2 - 360 / 2 + 40, game.config.height / 2 - 252 / 2 - 10, "framepicture");
        framepicture.setOrigin(0);
        var framepiece = sceneName.add.image(game.config.width / 2 - 360 / 2 - 80, game.config.height / 2 - 252 / 2 - 10, "framepiece").setOrigin(0);
    }


    loadPieces(sceneName, atlas, arr,x) {
        this.setZone(sceneName,arr.length);
        var ax=x*360/(2*(Math.sqrt(arr.length)));
        var ay=x*252/(2*(Math.sqrt(arr.length)));
        var location = [[game.config.width / 2 - 360 / 2 - 73, game.config.height / 2 - 252 / 2 - 3],
            [game.config.width / 2 - 360 / 2 - 73, game.config.height / 2 - 252 / 2 - 3 + 65],
            [game.config.width / 2 - 360 / 2 - 73, game.config.height / 2 - 252 / 2 - 3 + 129],
            [game.config.width / 2 - 360 / 2 - 73, game.config.height / 2 - 252 / 2 - 3 + 193]
        ]
        arr = this.shuffle(arr);

        var pic1 = sceneName.add.image(location[0][0]+ax, location[0][1]+ay, atlas, arr[0]).setScale(x);
        var pic2 = sceneName.add.image(location[1][0]+ax, location[1][1]+ay, atlas, arr[1]).setScale(x);
        var pic3 = sceneName.add.image(location[2][0]+ax, location[2][1]+ay, atlas, arr[2]).setScale(x);
        var pic4 = sceneName.add.image(location[3][0]+ax, location[3][1]+ay, atlas, arr[3]).setScale(x);
        pic1.setName(arr[0]);
        pic2.setName(arr[1]);
        pic3.setName(arr[2]);
        pic4.setName(arr[3]);
        return [pic1,pic2,pic3,pic4];

    }
    setDragAndDrop(sceneName,picture,scaleNum){
        this.piecesDrag(sceneName, picture,scaleNum);
        this.piecesDrop(sceneName, scaleNum);
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

    piecesDrag(sceneName, image,scaleNum) {
        image.setInteractive();
        sceneName.input.setDraggable(image);
        image.on('dragstart', function (pointer, gameObject) {
            image.setScale(1);
        });
        sceneName.input.on('dragstart', function (pointer, gameObject) {
            sceneName.children.bringToTop(gameObject);
        }, sceneName);

        sceneName.input.on('drag', function (pointer, gameObject, dragX, dragY,dropZone) {
            gameObject.x = pointer.x;
            gameObject.y = pointer.y;
        });
        sceneName.input.on('dragend', function (pointer, gameObject, dropped) {
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
                gameObject.setScale(scaleNum);
            }
        });
    }

    piecesDrop(sceneName,scaleNum) {
        sceneName.input.on('drop', function (pointer, gameObject, dropZone) {
            console.log(dropZone.name, gameObject.name);
            if (dropZone.name == gameObject.name) {
                gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;
                gameObject.input.enabled = false;

            } else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
                gameObject.setScale(scaleNum);
            }

        });
    }
    setZone(sceneName,num){
        var zone;
        var ax=360/(Math.sqrt(num));
        var ay=252/(Math.sqrt(num));
        for (let i=0;i<Math.sqrt(num);i++){
            for (let j=0;j<Math.sqrt(num);j++){
                zone=sceneName.add.zone(348 + i*ax+ax/2, 143 + j*ay+ay/2, ax/2, ay/2).setDropZone();
                zone.setName(j*Math.sqrt(num)+i+1);
            }
        }
    }

}