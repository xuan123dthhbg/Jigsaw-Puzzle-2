class level2 extends Phaser.Scene {
    constructor(){
        super("level2");
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
        main.loadButton(this,"atlas9", [1,2,3,4,5,6,7,8,9],0.75,1,9);
        var nextbtn = this.add.image(755 - 40, game.config.height - 113, "nextbtn");
        nextbtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            this.sound.play("clicksound", {loop: false});
            setTimeout(() => this.scene.start('level3'), 100)
        }, this)
        // main.setZone(this, 9);
        var pieces =main.loadPieces(this,"atlas9", [1,2,3,4,5,6,7,8,9],0.75,1,9)
        for (let i = 0; i < 4; i++) {
            main.setDragAndDrop(this,pieces[i] ,0.75);
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