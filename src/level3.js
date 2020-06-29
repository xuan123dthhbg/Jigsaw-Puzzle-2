class level3 extends Phaser.Scene {
    constructor(){
        super("level3");
    }

    preload() {
        
    }
    create() {
        var main = this.scene.get("main");
        main.loadImg(this)
        main.loadButton(this);
        main.loadPieces(this,"atlas16", 9, 1)
    }
}