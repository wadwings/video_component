const addBarrage = require("./barrage_send")

module.exports = function(){
    const player = document.querySelector("#player");
    let data = [];
    for(let i = 0; i < data.length; i++)
        setTimeout(function(){
            addBarrage(player, data[i]);
        },i*1000);
}