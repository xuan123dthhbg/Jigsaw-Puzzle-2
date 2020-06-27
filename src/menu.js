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
            //this.add.image(120, 180, "level_right");
            this.scene.start("level1");
        },this);
        

        level2.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            //this.add.image(480, 180, "level_right");
            this.scene.start("level2");
        },this);

        level3.setInteractive( { useHandCursor: true  }).on('pointerdown', function(){
            //this.add.image(800, 180, "level_right");
            this.scene.start("level3");
        },this);
    }

}
