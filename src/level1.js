class level1 extends Phaser.Scene {
    constructor(){
        super("level1");
    }

    preload() {
        
    }
    create() {
        var main = this.scene.get("main");
        main.loadImg(this)
        main.loadButton(this);
        main.loadPieces(this,"atlas4", 4, 0.5)
    }
}
