class level1 extends Phaser.Scene {
    constructor(){
        super("level1");
    }

    preload() {
        
    }
    create() {
        var frame = this.add.image(0,0, "frame");
        frame.setOrigin(0);
        var settingbtn = this.add.image(750, 200, "settingbtn");
        settingbtn.setInteractive({useHandCursor:true}).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            var playbtn = this.add.image(750, 200, "settingbtn_right")
        }, this)
        var pausebtn = this.add.image(750, 260, "pausebtn")
        pausebtn.setInteractive({useHandCursor:true}).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            var playbtn = this.add.image(750, 260, "playbtn")
            playbtn.setInteractive({useHandCursor:true}).on('pointerdown', function(){
                this.sound.play("clicksound", {loop: false});
                playbtn.destroy();
                playbtn = null;
            }, this)
        }, this)
        var backbtn = this.add.image(750, 140, "backbtn");
        backbtn.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            this.add.image(750, 140, "backbtn_right");
            setTimeout(() => this.scene.start("menu"), 100)
        },this);
        var helpbtn = this.add.image(750, 320, "helpbtn");

        var haveImg = false;
        helpbtn.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            if (haveImg == false){
                this.sound.play("clicksound", {loop: false});
                setTimeout(() => this.orginpicture = this.add.image(game.config.width/2 - 200, game.config.height/2 - 117.5,"originpicture").setOrigin(0), 100);
                haveImg = true;
            } else{
                this.sound.play("clicksound", {loop: false});
                this.orginpicture.destroy();
                this.originpicture = null;
                haveImg = false;
            } 
        },this);

        var musiconbtn = this.add.image(750, 380, "musicon");
        var haveMusic = true;
        musiconbtn.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            if (haveMusic == true){
                this.sound.play("clicksound", {loop: false});
                setTimeout(() => this.musicoffbtn = this.add.image(750, 380, "musicoff"), 100);
                haveMusic = false;
            } else {
                this.sound.play("clicksound", {loop: false});
                this.musicoffbtn.destroy();
                this.musicoffbtn = null;
                haveMusic = true;
            }
            
        },this);
    }

}
