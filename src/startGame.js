class startGame extends Phaser.Scene {
    constructor(){
        super("startGame");
    }

    preload() {
        
    }
    create() {  
        var startgame = this.sound.add("startgame", {loop:true});
        startgame.play();
        this.add.image(0, 0,"background").setOrigin(0);
        var head = this.add.image(game.config.width/2, 0,"head");
        this.add.image(game.config.width *4/5, game.config.height/2.5, "jigsaw").setScale(2);
        var playbutton = this.add.image(game.config.width,game.config.height*3/4, "playbutton");
        playbutton.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            this.scene.start("level1");
            startgame.stop();   
        },this);
        this.tweens.add({
            targets: playbutton,
                    props: {
                        x: {value: game.config.width/5 *4, duration: 1500, ease: 'Bounce.easeOut'}
                    },
                    delay: 0
        })
        this.tweens.add({
            targets: head,
                    props: {
                        y: {value: game.config.height/1.7, duration: 1500, ease: 'Bounce.easeOut'}
                    },
                    delay: 0
        })
    }
}
