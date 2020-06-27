class startGame extends Phaser.Scene {
    constructor(){
        super("startGame");
    }

    preload() {
        
    }
    create() {
        var back1 = this.add.image(0, 0,"background");
        back1.setOrigin(0);
        var playbutton = this.add.image(200,130, "playbutton")
        playbutton.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.scene.start("menu");
        },this);

        
    }
}
