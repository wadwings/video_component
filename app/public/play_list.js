const data = require("./data");
const removeElement = require("./remove_ele");
const mediaPlayer = require("./class");


module.exports = function(){
    let list = document.querySelector("#mulu");
    console.log(list);
    for (let i in data){
        let item = document.createElement("li");
        item.innerHTML = i;
        item.onclick = function(){
            removeElement(list);
            mediaPlayer(document.body, data[i], "1080px", "640px", "1", true, true);
        }
        list.appendChild(item);
    }
}