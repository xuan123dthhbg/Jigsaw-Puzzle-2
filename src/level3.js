class level3 extends Phaser.Scene {
    constructor(){
        super("level3");
    }
    init() {
        this.text;
        this.initialTime;
    }
    create() {
        this.text=0;
        var main = this.scene.get("main");
        main.loadBackground(this);
        main.loadFrame(this);
        main.loadButton(this,"atlas16", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 1,1,16);
        // main.setZone(this, 16);
        var pieces = main.loadPieces(this,"atlas16", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 1,1,16);
        for (let i = 0; i < 4; i++) {
            main.setDragAndDrop(this,pieces[i] ,1);
        }
        this.initialTime = 150;
        this.text = this.add.text(450, 410, 'Countdown: ' + main.formatTime(this.initialTime)).setStroke('#EFAB0C', 8);
        var timedEvent = this.time.addEvent({
            delay: 1000,
            callback:  ()=> {
                this.initialTime -= 1; // One second
                this.text.setText('Countdown: ' + main.formatTime(this.initialTime));
            },
            callbackScope: this,
            loop: true});
    }
}