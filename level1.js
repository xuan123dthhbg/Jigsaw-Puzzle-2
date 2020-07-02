class level1 extends Phaser.Scene {
    constructor() {
        super("level1");
    }

    preload() {

    }

    create() {
        var main = this.scene.get("main");
        main.loadImg(this)
        main.loadButton(this);
        var pieces = main.loadPieces(this, "atlas4", [1, 2, 3, 4], 0.5);
        for (let i = 0; i < 4; i++) {
             main.setDragAndDrop(this,pieces[i] ,0.5);
        }

    }
}
