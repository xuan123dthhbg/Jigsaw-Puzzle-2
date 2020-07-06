class boodtGame extends Phaser.Scene {
    constructor (){
        super("boodtGame");
    }
    preload (){
        this.load.pack("pack_img","data/sources.json", "img");
        this.load.pack("pack_sound", "data/sources.json", "sound");
        this.load.atlas("atlas4", "assets/img/basicpicture.png", "data/atlas4.json");
        this.load.atlas("atlas9", "assets/img/basicpicture.png", "data/atlas9.json");
        this.load.atlas("atlas16", "assets/img/basicpicture.png", "data/atlas16.json");
    }
    create (){
        this.scene.start("startGame");
        
    }
}