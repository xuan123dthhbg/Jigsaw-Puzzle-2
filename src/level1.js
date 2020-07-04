class level1 extends Phaser.Scene {
    constructor() {
        super("level1");
    }
    init() {
        this.text;
        this.initialTime;
    }
    create() {
        var main = this.scene.get("main");
        this.text=0;
        main.loadBackground(this);
        main.loadFrame(this);
        main.loadButton(this, "atlas4", [1, 2, 3, 4], 0.5, 1, 4);
        var nextbtn = this.add.image(755 - 40, game.config.height - 113, "nextbtn");
        nextbtn.setInteractive({useHandCursor: true}).on('pointerdown', function () {
            this.sound.play("clicksound", {loop: false});
            setTimeout(() => this.scene.start('level2'), 100)
        }, this)
        var pieces = main.loadPieces(this, "atlas4", [1, 2, 3, 4], 0.5, 1, 4);
        main.setZone(this, 4);
        for (let i = 0; i < 4; i++) {
            main.setDragAndDrop(this, pieces[i], 0.5);
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
