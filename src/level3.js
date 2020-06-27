class level3 extends Phaser.Scene {
    constructor(){
        super("level3");
    }

    preload() {
        
    }
    create() {
        var originpicture = this.add.image(0,0, "originpicture");
        originpicture.setOrigin(0);
        var backbtn = this.add.image(50, 50, "backbtn");
        var settingbtn = this.add.image(750, 50, "settingbtn");
        
        backbtn.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.scene.start("menu");
        },this);
    }
}
