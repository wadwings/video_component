window.onload = function(){
    const ul = document.querySelector("#目录");
    for (let i in data){
        let li = document.createElement("li");
        li.innerHTML = i;
        li.onclick = function(){
            removeElement(ul);
            const video = document.createElement("video");
            document.body.appendChild(video);
            video.controls = true;
            video.src = data[i];
            video.play();
        }
        ul.appendChild(li);
    }
}

function removeElement(_element){
    let _parentElement = _element.parentNode;
    if(_parentElement){
    _parentElement.removeChild(_element);
    }
}