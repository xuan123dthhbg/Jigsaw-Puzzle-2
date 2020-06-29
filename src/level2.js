class level2 extends Phaser.Scene {
    constructor(){
        super("level2");
    }

    preload() {
        
    }
    create() {
        var main = this.scene.get("main");
        main.loadImg(this)
        main.loadButton(this);
        main.loadPieces(this,"atlas9", 9, 0.75)
    }
}