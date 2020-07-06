class startGame extends Phaser.Scene {
    constructor(){
        super("startGame");
    }

    preload() {
        
    }
    create() {  
        var startgame = this.sound.add("startgame", {loop:true});
        startgame.play();
        var back1 = this.add.image(0, 0,"background");
        back1.setOrigin(0);
        var playbutton = this.add.image(200,650, "playbutton")
        playbutton.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            this.scene.start("level1");
            startgame.stop();   
        },this);
        this.tweens.add({
            targets: playbutton,
                    props: {
                        y: {value: 130, duration: 1500, ease: 'Bounce.easeOut'}
                    },
                    delay: 500
        })
    }
}
