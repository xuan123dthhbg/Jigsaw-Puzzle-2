class level3 extends Phaser.Scene {
    constructor(){
        super("level3");
    }
    init() {
        this.initialTime;
    }
    create() {
        var main = this.scene.get("main");
        var soundtrack = main.loadMusic('soundtrack');
        soundtrack.play();
        main.loadBackground(this);
        main.loadFrame(this);
        main.loadButton(this, soundtrack);
        // main.setZone(this, 16);
        var pieces = main.loadPieces(this,"atlas16", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 1,1,16);
        for (let i = 0; i < 4; i++) {
            main.setDragAndDrop(this,pieces[i] ,1);
        }
        main.countdown(this, 120, soundtrack);
    }
}