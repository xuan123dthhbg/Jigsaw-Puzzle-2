class boodtGame extends Phaser.Scene {
    constructor (){
        super("boodtGame");
    }
    preload (){
        this.load.pack("pack_img","data/sources.json", "img");
        this.load.pack("pack_sound", "data/sources.json", "sound");
    }
    create (){
        this.scene.start("startGame");
    }
}