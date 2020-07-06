class level1 extends Phaser.Scene {
    constructor() {
        super("level1");
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
        
        var pieces = main.loadPieces(this, "atlas4", [1, 2, 3, 4], 0.5, 1, 4);
        main.setZone(this, 4);
        for (let i = 0; i < 4; i++) {
            main.setDragAndDrop(this, pieces[i], 0.5);
            
        }
        main.countdown(this, 30, soundtrack);
        
    }

}
