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
        // main.setZone(this, 9);
        var pieces =main.loadPieces(this,"atlas9", [1,2,3,4,5,6,7,8,9],0.75,1,9)
        for (let i = 0; i < 4; i++) {
            main.setDragAndDrop(this,pieces[i] ,0.75);
        }
    }
}