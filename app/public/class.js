const init = require("./Init");

class mediaPlayer{
    constructor(rootDom, source, width, height, volume, barrage, floatWin){
        const player = document.createElement("div");
        player.id = "player";
        const video = document.createElement("video");
        video.id = "video";
        video.src = source;
        player.appendChild(video);
        rootDom.appendChild(player);
        player.style.width = width;
        player.style.height = height;
        video.volume = volume;
        window.barrage = barrage;
        window.window_able = floatWin;
        init();
    }
}

module.exports = function(rootDom, source, width, height, volume, barrage, floatWin){
    let i = new mediaPlayer(rootDom, source, width, height, volume, barrage, floatWin);
};