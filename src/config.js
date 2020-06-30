var game;

window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 960,
        height: 540,
        backgroundColor: "#C6F4F0",
        scene: [boodtGame, startGame, menu, level1, level2, level3, main]
        
    }
    game = new Phaser.Game(config);
    window.focus();
    
}