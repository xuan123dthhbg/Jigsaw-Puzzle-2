class main extends Phaser.Scene {
    constructor() {
        super("main");
    }

    init() {
        this.arrPieces;
        this.atlasPieces;
        this.scaleNum;
        this.numPieces;
        this.piecesRender;
    }

    loadButton(sceneName, atlas, arr, x, shuffle, numZone) {
        this.arrPiecesDropped = [];
        this.piecesRender = [];
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

        var isplaying = true;
        var pausebtn = sceneName.add.image(755, 260, "pausebtn")
        pausebtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            if (isplaying == true) {
                sceneName.sound.play("clicksound", {loop: false});
                setTimeout(() => sceneName.playbtn = sceneName.add.image(755, 260, "playbtn"), 100);
                isplaying = false;
                sceneName.sound.pauseAll();
            } else {
                sceneName.playbtn.destroy();
                sceneName.playbtn = null;
                isplaying = true;
                sceneName.sound.resumeAll();
            }
        }, this);
        
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
                sceneName.sound.pauseAll();
            } else {
                sceneName.musicoffbtn.destroy();
                sceneName.musicoffbtn = null;
                haveMusic = true;
                sceneName.sound.resumeAll();
            }
        }, this);

        var changebtn = sceneName.add.image(game.config.width / 2 - 360 / 2 - 80 + 105/2, game.config.height - 110, "changepieces");
        changebtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            sceneName.sound.play("clicksound", {loop: false});
            this.destroyPieces(this.piecesRender);
            this.shuffle(this.piecesRender);
            this.loadPieces(sceneName, atlas, arr, x, shuffle, numZone);
        }, this)
    }
    loadBackground(sceneName){
        var frame = sceneName.add.image(0, 0, "frame");
        frame.setOrigin(0);
    }
    destroyPieces(arr){
        for (let i=0; i < arr.length; i++){
            arr[i].destroy();
        }
    }

    loadFrame(sceneName) {
        var framepicture = sceneName.add.image(game.config.width / 2 - 360 / 2 + 40, game.config.height / 2 - 252 / 2 - 10, "framepicture");
        framepicture.setOrigin(0);
        var framepieces = sceneName.add.image(game.config.width / 2 - 360 / 2 - 80, game.config.height / 2 - 252 / 2 - 10, "framepiece").setOrigin(0);
    }

    loadPieces(sceneName, atlas, arr, x, shuffle, numZone) {
        let count = 4;
        this.piecesRender = [];
        this.atlasPieces = atlas;
        this.scaleNum = x;
        this.numPieces = numZone;
        this.setZone(sceneName, numZone);
        var ax = x * 360 / (2 * (Math.sqrt(numZone)));
        var ay = x * 252 / (2 * (Math.sqrt(numZone)));
        var location = [[game.config.width / 2 - 360 / 2 - 73, game.config.height / 2 - 252 / 2 - 3],
            [game.config.width / 2 - 360 / 2 - 73, game.config.height / 2 - 252 / 2 - 3 + 65],
            [game.config.width / 2 - 360 / 2 - 73, game.config.height / 2 - 252 / 2 - 3 + 129],
            [game.config.width / 2 - 360 / 2 - 73, game.config.height / 2 - 252 / 2 - 3 + 193]
        ]
        if (shuffle == 1) {
            arr = this.shuffle(arr);
        }
        this.arrPieces = arr;
        if (arr.length >= 4) {
            count = 4;
        } else {
            count = arr.length;
        }
        for (let i = 0; i < count; i++) {
            let pic = sceneName.add.image(location[i][0] + ax, location[i][1] + ay, atlas, arr[i]).setScale(x);
            pic.setName(arr[i]);
            this.piecesRender.push(pic);
        }
        return this.piecesRender;

    }

    setDragAndDrop(sceneName, picture, scaleNum) {
        this.piecesDrag(sceneName, picture, scaleNum);
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

    piecesDrag(sceneName, image, scaleNum) {
        image.setInteractive();
        sceneName.input.setDraggable(image);
        image.on('dragstart', function (pointer, gameObject) {
            image.setScale(1);
        });
        sceneName.input.on('dragstart', function (pointer, gameObject) {
            sceneName.children.bringToTop(gameObject);
        }, sceneName);

        sceneName.input.on('drag', function (pointer, gameObject, dragX, dragY, dropZone) {
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

    piecesDrop(sceneName, scaleNum) {
        sceneName.input.on('drop', function (pointer, gameObject, dropZone) {

            if (dropZone.name == gameObject.name && this.arrPieces.indexOf(gameObject.name) >= 0) {
                gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;
                gameObject.input.enabled = false;
                if (this.arrPieces.indexOf(gameObject.name) >= 0) {
                    this.arrPieces.splice(this.arrPieces.indexOf(gameObject.name), 1);

                    this.piecesRender.splice(this.piecesRender.indexOf(gameObject), 1);
                    for (let i = 0; i < this.piecesRender.length; i++) {
                        this.piecesRender[i].destroy();
                    }
                    let pieces = this.loadPieces(sceneName, this.atlasPieces, this.arrPieces, this.scaleNum, 0, this.numPieces);
                    for (let i = 0; i < this.piecesRender.length; i++) {
                        this.setDragAndDrop(sceneName, this.piecesRender[i], this.scaleNum);
                    }
                }
            } else if (this.arrPieces.indexOf(gameObject.name) >= 0) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
                gameObject.setScale(scaleNum);
            }

        }, this);
    }

    setZone(sceneName, num) {
        var zone;
        var ax = 360 / (Math.sqrt(num));
        var ay = 252 / (Math.sqrt(num));
        for (let i = 0; i < Math.sqrt(num); i++) {
            for (let j = 0; j < Math.sqrt(num); j++) {
                zone = sceneName.add.zone(348 + i * ax + ax / 2, 143 + j * ay + ay / 2, ax, ay).setDropZone();
                zone.setName(j * Math.sqrt(num) + i + 1);
                let graphics = sceneName.add.graphics();
                graphics.lineStyle(2, 0xFCDCEA);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

            }
        }
    }
    countdown(sceneName, initialTime){
        var text = sceneName.add.text(450, 410, 'Countdown: ' + this.formatTime(initialTime)).setStroke('#EFAB0C', 8);;
        
        sceneName.time.addEvent({ 
            delay: 1000, 
            callback: this.onEvent(text, initialTime), 
            callbackScope: sceneName, 
            loop: true});
            console.log("ok");
    }

    formatTime(seconds){
        var minutes = Math.floor(seconds/60);
        // Seconds
        var partInSeconds = seconds%60;
        // Adds left zeros to seconds
        partInSeconds = partInSeconds.toString().padStart(2,'0');
        // Returns formated time
        return `${minutes}:${partInSeconds}`;
    }

    onEvent (text, initialTime){
    initialTime -= 1; // One second
    text.setText('Countdown: ' + this.formatTime(initialTime));
    console.log("ok");
}

}