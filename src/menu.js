class menu extends Phaser.Scene {
    constructor(){
        super("menu");
    }

    preload() {
        
    }
    create() {
        var back1 = this.add.image(0, 0,"back_scene1");
        back1.setOrigin(0);
        var level1 = this.add.image(120,180, "level");
        var level2 = this.add.image(480,180, "level");
        var level3 = this.add.image(800,180, "level");

        level1.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            
            this.add.image(120, 180, "level_right");
            setTimeout(() => this.scene.start("level1"), 100) 
            
        },this);
        

        level2.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            this.add.image(480, 180, "level_right");
            setTimeout(() => this.scene.start("level2"), 100) 
        },this);

        level3.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            this.add.image(800, 180, "level_right");
            setTimeout(() => this.scene.start("level3"), 100) 
        },this);

        var backbtn = this.add.image(50, 50, "backbtn");
        backbtn.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            this.sound.play("clicksound", {loop: false});
            this.add.image(50, 50, "backbtn_right");
            setTimeout(() => this.scene.start("startGame"), 100)
        },this);

        
    }

}
