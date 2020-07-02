class startGame extends Phaser.Scene {
    constructor(){
        super("startGame");
    }

    preload() {
        
    }
    create() {
        var soundtrack = this.sound.play("soundtrack",{loop: true})   
        var back1 = this.add.image(0, 0,"background");
        back1.setOrigin(0);
        var playbutton = this.add.image(200,130, "playbutton")
         
        playbutton.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            this.scene.start("menu");
            
        },this);    
    }
}
