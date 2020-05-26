/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/barrage/barrage_from_server.js":
/*!********************************************!*\
  !*** ./app/barrage/barrage_from_server.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const addBarrage = __webpack_require__(/*! ./barrage_send */ \"./app/barrage/barrage_send.js\")\r\n\r\nmodule.exports = function(){\r\n    const player = document.querySelector(\"#player\");\r\n    let data = [];\r\n    for(let i = 0; i < data.length; i++)\r\n        setTimeout(function(){\r\n            addBarrage(player, data[i]);\r\n        },i*1000);\r\n}\n\n//# sourceURL=webpack:///./app/barrage/barrage_from_server.js?");

/***/ }),

/***/ "./app/barrage/barrage_manager.js":
/*!****************************************!*\
  !*** ./app/barrage/barrage_manager.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const addBarrage = __webpack_require__(/*! ./barrage_send */ \"./app/barrage/barrage_send.js\");\r\nconst load_barrage = __webpack_require__(/*! ./barrage_from_server */ \"./app/barrage/barrage_from_server.js\");\r\nconst switcher = __webpack_require__(/*! ./barrage_switch */ \"./app/barrage/barrage_switch.js\");\r\n\r\n\r\n\r\nmodule.exports = function(player){\r\n    window.barrage = true;\r\n    var btn = document.getElementById(\"send\");\r\n    load_barrage();\r\n    btn.onclick = function () {\r\n        addBarrage(player);\r\n    };\r\n    switcher(document.querySelector(\"#barrage_switch\"));\r\n    switcher(document.querySelector(\"#circur\"));\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./app/barrage/barrage_manager.js?");

/***/ }),

/***/ "./app/barrage/barrage_send.js":
/*!*************************************!*\
  !*** ./app/barrage/barrage_send.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const move = __webpack_require__(/*! ./move */ \"./app/barrage/move.js\");\r\n\r\nmodule.exports = function (player, content) {\r\n    if(window.barrage){\r\n    const colors = [\"#2C3E50\",\"#FF0000\",\"#1E87F0\",\"#7AC84B\",\"#FF7F00\",\"#9B39F4\",\"#FF69B4\",]; //弹幕颜色库\r\n    let text = \"\";\r\n    if(content){\r\n        text = content;\r\n    }else{\r\n        text = document.getElementById(\"input\").value;\r\n        document.getElementById(\"input\").value = \"\";\r\n    }\r\n\r\n\r\n    let index = parseInt(Math.random() * colors.length); //随机弹幕颜色\r\n    let p = document.createElement(\"p\");\r\n    let clientHeight = player.clientHeight - 100;\r\n    let top = Math.random()*clientHeight;\r\n    let clientWidth = player.clientWidth;\r\n    p.style.fontSize = (40-text.length > 20 ?40-text.length:20) + \"px\";\r\n    p.innerHTML = text;\r\n    p.style.whiteSpace = \"nowrap\";\r\n    p.style.position = \"absolute\";\r\n    p.style.color = colors[index];\r\n    p.style.top = (top - 40) + \"px\";\r\n    p.style.left = (clientWidth + 200) + \"px\";\r\n    p.style.transition = \"0.3s linear\";\r\n    player.appendChild(p);\r\n    console.log(p);\r\n\r\n    move(p);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/barrage/barrage_send.js?");

/***/ }),

/***/ "./app/barrage/barrage_switch.js":
/*!***************************************!*\
  !*** ./app/barrage/barrage_switch.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(button){\r\n    console.log('1');\r\n    button.onclick = function(){\r\n        let circur = document.querySelector(\"#circur\");\r\n        window.barrage = window.barrage?false:true;\r\n        if(window.barrage)\r\n            circur.style.opacity = \"0\";\r\n        else\r\n            circur.style.opacity = \"1\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/barrage/barrage_switch.js?");

/***/ }),

/***/ "./app/barrage/move.js":
/*!*****************************!*\
  !*** ./app/barrage/move.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = move;\r\nconst remove = __webpack_require__(/*! ../public/remove_ele */ \"./app/public/remove_ele.js\");\r\n\r\nfunction move(p) {\r\n    p.style.left = (parseInt(p.style.left) - 50) + \"px\";\r\n    if(parseInt(p.style.left) <= -700){\r\n        setTimeout(function(){\r\n            remove(p);\r\n    },300);\r\n    }else{\r\n        setTimeout(function(){\r\n            move(p);\r\n        },300);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/barrage/move.js?");

/***/ }),

/***/ "./app/control/fullscreen_switch.js":
/*!******************************************!*\
  !*** ./app/control/fullscreen_switch.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function toFullVideo(videoDom) {\r\n    if (videoDom.requestFullscreen) {\r\n        return videoDom.requestFullscreen();\r\n    } else if (videoDom.webkitRequestFullScreen) {\r\n        return videoDom.webkitRequestFullScreen();\r\n    } else if (videoDom.mozRequestFullScreen) {\r\n        return videoDom.mozRequestFullScreen();\r\n    } else {\r\n        return videoDom.msRequestFullscreen();\r\n    }\r\n}//兼容封装\r\nfunction ExitFullVideo(va) {\r\n    if (document.exitFullscreen) {\r\n        document.exitFullscreen();\r\n    } else if (document.msExitFullscreen) {\r\n        document.msExitFullscreen();\r\n    } else if (document.mozCancelFullScreen) {\r\n        document.mozCancelFullScreen();\r\n    } else if (document.webkitExitFullscreen) {\r\n        document.webkitExitFullscreen();\r\n    }\r\n}\r\n\r\nmodule.exports = function (button, div) {\r\n    window.fullscreen = false;\r\n    div.addEventListener(\"fullscreenchange\", function(){\r\n        if(window.fullscreen){\r\n            window.fullscreen = false;\r\n        }else{\r\n            window.fullscreen = true;\r\n        }\r\n    })\r\n    button.addEventListener(\"click\", function () {\r\n        if (window.fullscreen) {\r\n            ExitFullVideo(div);\r\n        }else{\r\n            toFullVideo(div);\r\n        }\r\n    })\r\n    div.addEventListener(\"dblclick\", function () {\r\n        while(window.timeout.length)\r\n            clearTimeout(window.timeout.pop());\r\n        if(window.fullscreen){\r\n            ExitFullVideo(div);\r\n        }else{\r\n            toFullVideo(div);\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./app/control/fullscreen_switch.js?");

/***/ }),

/***/ "./app/control/key_time.js":
/*!*********************************!*\
  !*** ./app/control/key_time.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(video, time){\r\n    if(video.currentTime + time > 0)\r\n        return video.currentTime += time;\r\n    else if(video.currentTime + time > video.duration)\r\n        return video.currentTime = video.duration;\r\n    else\r\n        return video.currentTime = 0;\r\n}\n\n//# sourceURL=webpack:///./app/control/key_time.js?");

/***/ }),

/***/ "./app/control/key_volume.js":
/*!***********************************!*\
  !*** ./app/control/key_volume.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(video, volume){\r\n    const slid1 = document.querySelector(\"#slid1\");\r\n    const slid2 = document.querySelector(\"#slid2\");\r\n    if(video.volume + volume/100 > 0){\r\n        slid1.style.width = (slid1.clientWidth + volume) + \"px\";\r\n        slid2.style.width = (slid2.clientWidth - volume) + \"px\";\r\n        return video.volume += volume/100;\r\n    }else if(video.volume + volume/100 > 1){\r\n        slid1.style.width = \"100px\";\r\n        slid2.style.width = \"0px\";\r\n        return video.volume = 1;\r\n    }else{\r\n        slid1.style.width = \"0px\";\r\n        slid2.style.width = \"100px\";\r\n        return video.volume = 0;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/control/key_volume.js?");

/***/ }),

/***/ "./app/control/mute_switch.js":
/*!************************************!*\
  !*** ./app/control/mute_switch.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(button, video){\r\n    button.addEventListener(\"click\", function(){\r\n        if(video.muted){\r\n            video.muted = false;\r\n        }else{\r\n            video.muted = true;\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./app/control/mute_switch.js?");

/***/ }),

/***/ "./app/control/play_switch.js":
/*!************************************!*\
  !*** ./app/control/play_switch.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(ele, video){\r\n    const play = document.querySelector(\"#play\");\r\n    window.timeout = new Array();\r\n    ele.addEventListener('click', function(){\r\n    window.timeout.push(setTimeout(function(){\r\n        if(video.paused){\r\n            video.play();\r\n            play.innerHTML = '<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-67\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z\" id=\"ytp-id-67\"></path></svg>'\r\n        }else{\r\n            video.pause();\r\n            play.innerHTML = '<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-116\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z\" id=\"ytp-id-116\"></path></svg>'\r\n        }},200)\r\n    )})\r\n}\r\n\n\n//# sourceURL=webpack:///./app/control/play_switch.js?");

/***/ }),

/***/ "./app/control/progress.js":
/*!*********************************!*\
  !*** ./app/control/progress.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(video){\r\n    let index = 0;\r\n    const played = document.querySelector(\"#played\");\r\n    const non_played = document.querySelector(\"#non_played\");\r\n    const progress = document.querySelector(\"#progress\");\r\n    document.querySelector(\"#bar\").ondrag = function(event){\r\n        window.time = false;\r\n        const duration = video.duration;\r\n        video.pause();\r\n        let d = 0;\r\n        if(index == 0||event.clientX == 0)\r\n            d = 0;\r\n        else{\r\n            d = event.clientX - index;\r\n        let rate = d;\r\n        console.log(rate);\r\n        if(played.clientWidth + rate <= progress.clientWidth && played.clientWidth + rate >= 0){\r\n            video.currentTime = duration*(played.clientWidth + rate)/progress.clientWidth;\r\n            console.log(\"1\" + played.clientWidth/progress.clientWidth);\r\n            played.style.width = (played.clientWidth + rate) + \"px\";\r\n            console.log(\"3\" + played.clientWidth + rate);\r\n            console.log(\"2\" + played.clientWidth);\r\n            non_played.style.width= (non_played.clientWidth - rate) + \"px\";\r\n        }else if(played.clientWidth + rate > progress.clientWidth){\r\n            video.currentTime = duration;\r\n            played.setAttribute(\"style\", \"width: 100%\");\r\n            non_played.setAttribute(\"style\", \"width: 0%\");\r\n        }else{\r\n            video.currentTime = 0;\r\n            played.setAttribute(\"style\", \"width: 0%\");\r\n            non_played.setAttribute(\"style\", \"width: 100%\");\r\n        }\r\n        }\r\n        index = event.clientX;\r\n    }\r\n    document.querySelector(\"#bar\").ondragend = function(){\r\n        window.time = true;\r\n        video.play()\r\n    }\r\n    document.querySelector(\"#progress\").onclick = function(event){\r\n        rate = (event.clientX - ClientLeft(progress))/progress.clientWidth>1?1:(event.clientX - ClientLeft(progress))/progress.clientWidth;\r\n        video.currentTime = duration*rate;\r\n        played.setAttribute(\"style\", \"width: \" + rate*0.995 + \"%\");\r\n        non_played.setAttribute(\"style\", \"width: \" + rate*0.995 + \"%\");\r\n    }\r\n}\r\n\r\nfunction ClientLeft(element){\r\n    let left = 0;\r\n    while(element != document.body){\r\n        left += element.offsetLeft;\r\n        element = element.parentNode;\r\n    }\r\n    return left;\r\n}\n\n//# sourceURL=webpack:///./app/control/progress.js?");

/***/ }),

/***/ "./app/control/rate.js":
/*!*****************************!*\
  !*** ./app/control/rate.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(button, video){\r\n    window.rate = 1;\r\n    button.innerHTML = window.rate;\r\n    let speedlist = [0.5, 1, 1.25, 1.5, 2];\r\n    button.addEventListener(\"click\", function(){\r\n        let i = speedlist.indexOf(window.rate);\r\n        i = i==4?0:i+1;\r\n        window.rate = speedlist[i];\r\n        video.playbackRate = window.rate;\r\n        button.innerHTML = window.rate;\r\n    })\r\n}\n\n//# sourceURL=webpack:///./app/control/rate.js?");

/***/ }),

/***/ "./app/control/sync.js":
/*!*****************************!*\
  !*** ./app/control/sync.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function convert(time){\r\n    let second = parseInt(time%60);\r\n    time = parseInt(time/60);\r\n    let minute = time%60;\r\n    time = parseInt(time/60);\r\n    let hour = time%60;\r\n    return hour?hour + \":\" + minute + \":\" + second:minute + \":\" + second;\r\n}\r\n\r\nmodule.exports = function check(video){\r\n    const time = document.querySelector(\"#time\");\r\n    duration = video.duration;\r\n    setTimeout(function(){\r\n        if(window.time){\r\n            let played = document.querySelector(\"#played\");\r\n            let non_played = document.querySelector(\"#non_played\");\r\n            time.innerHTML = convert(video.currentTime) + \"/\" + convert(video.duration);\r\n            played.setAttribute(\"style\", \"width: \" + (video.currentTime / video.duration)*99.5 + \"%\");\r\n            non_played.setAttribute(\"style\", \"width: \" + ((duration - video.currentTime) / duration)*99.5 + \"%\");\r\n        }\r\n        check(video);\r\n    },500);\r\n}\n\n//# sourceURL=webpack:///./app/control/sync.js?");

/***/ }),

/***/ "./app/control/volume_change.js":
/*!**************************************!*\
  !*** ./app/control/volume_change.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(video){\r\n    let index = 0\r\n    document.querySelector(\"#slider\").ondrag = function(event){\r\n        let d;\r\n        if(index != 0&&event.clientX != 0)\r\n            d = -(event.clientX - index);\r\n        else\r\n            d = 0;\r\n        console.log(d);\r\n        const slid1 = document.querySelector(\"#slid1\");\r\n        const slid2 = document.querySelector(\"#slid2\");\r\n        if(slid2.clientWidth + d <= 100 && slid2.clientWidth + d >= 0){\r\n            video.volume = (slid1.clientWidth - d)/100;\r\n            slid2.setAttribute(\"style\", \"width: \" + (slid2.clientWidth + d) + \"px\");\r\n            slid1.setAttribute(\"style\", \"width: \" + (slid1.clientWidth - d) + \"px\");\r\n        }else if(slid2.clientWidth + d > 100){\r\n            video.volume = 0;\r\n            slid2.setAttribute(\"style\", \"width: 100px\");\r\n            slid1.setAttribute(\"style\", \"width: 0px\");\r\n        }else{\r\n            video.volume = 1;\r\n            slid2.setAttribute(\"style\", \"width: 0px\");\r\n            slid1.setAttribute(\"style\", \"width: 100px\");\r\n        }\r\n        index = event.clientX;\r\n    }\r\n    const volume = document.querySelector(\"#volume\");\r\n    const leng = document.querySelector(\"#leng\");\r\n    const time = document.querySelector(\"#time\");\r\n    volume.onmouseover = function(){\r\n        leng.style.opacity = 0.5;\r\n        time.style.left = \"120px\";\r\n    }\r\n    volume.onmouseout = function(){\r\n        leng.style.opacity = 0;\r\n        time.style.left = \"0\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/control/volume_change.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const play_list = __webpack_require__(/*! ./public/play_list */ \"./app/public/play_list.js\");\r\nplay_list();\r\n\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ }),

/***/ "./app/public/Init.js":
/*!****************************!*\
  !*** ./app/public/Init.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const play_switch = __webpack_require__(/*! ../control/play_switch */ \"./app/control/play_switch.js\");\r\nconst construct = __webpack_require__(/*! ./construct */ \"./app/public/construct.js\")\r\nconst mute_switch = __webpack_require__(/*! ../control/mute_switch */ \"./app/control/mute_switch.js\")\r\nconst volume_change = __webpack_require__(/*! ../control/volume_change */ \"./app/control/volume_change.js\");\r\nconst fullscreen_switch = __webpack_require__(/*! ../control/fullscreen_switch */ \"./app/control/fullscreen_switch.js\");\r\nconst rate_switch = __webpack_require__(/*! ../control/rate */ \"./app/control/rate.js\");\r\nconst progress = __webpack_require__(/*! ../control/progress */ \"./app/control/progress.js\");\r\nconst time = __webpack_require__(/*! ../control/sync */ \"./app/control/sync.js\");\r\nconst barrage = __webpack_require__(/*! ../barrage/barrage_manager */ \"./app/barrage/barrage_manager.js\");\r\nconst key_down = __webpack_require__(/*! ./keydown */ \"./app/public/keydown.js\");\r\nconst video_window = __webpack_require__(/*! ../window/window_manager */ \"./app/window/window_manager.js\");\r\n\r\n\r\nmodule.exports = function(){\r\n    window.time =true;\r\n    let video = document.querySelector(\"video\");\r\n    video.parentNode.appendChild(construct());//将播放组件添加到播放器下方\r\n    let play_button = document.querySelector(\"#play\");\r\n    let player = document.querySelector(\"#player\");\r\n    console.log(player);\r\n    console.log(player.style.height);\r\n    let fullscreen = document.querySelector(\"#fullscreen\");\r\n    let clicklist = [video, play_button];\r\n    let rate = document.querySelector(\"#rate\");\r\n\r\n    for(let i = 0; i < clicklist.length;i++){\r\n        play_switch(clicklist[i], video)//播放与暂停监听\r\n    }\r\n    mute_switch(document.querySelector(\"#volume\"), video);//静音点击监听\r\n    volume_change(video);//声音变大变小监听\r\n    fullscreen_switch(fullscreen, player);//全屏切换监听\r\n    rate_switch(rate, video);//视频倍率调节\r\n    progress(video);//视频进度调节\r\n    time(video);//视频当前播放时间获取\r\n    barrage(player);\r\n    key_down(player);\r\n    video_window(player);\r\n}\n\n//# sourceURL=webpack:///./app/public/Init.js?");

/***/ }),

/***/ "./app/public/class.js":
/*!*****************************!*\
  !*** ./app/public/class.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const init = __webpack_require__(/*! ./Init */ \"./app/public/Init.js\");\r\n\r\nclass mediaPlayer{\r\n    constructor(rootDom, source, width, height, volume, barrage, floatWin){\r\n        const player = document.createElement(\"div\");\r\n        player.id = \"player\";\r\n        const video = document.createElement(\"video\");\r\n        video.id = \"video\";\r\n        video.src = source;\r\n        player.appendChild(video);\r\n        rootDom.appendChild(player);\r\n        player.style.width = width;\r\n        player.style.height = height;\r\n        video.volume = volume;\r\n        window.barrage = barrage;\r\n        window.window_able = floatWin;\r\n        init();\r\n    }\r\n}\r\n\r\nmodule.exports = function(rootDom, source, width, height, volume, barrage, floatWin){\r\n    let i = new mediaPlayer(rootDom, source, width, height, volume, barrage, floatWin);\r\n};\n\n//# sourceURL=webpack:///./app/public/class.js?");

/***/ }),

/***/ "./app/public/construct.js":
/*!*********************************!*\
  !*** ./app/public/construct.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\r\n    let control = document.createElement(\"div\");\r\n    control.className = \"control\";\r\n\r\n\r\n    let progress = document.createElement(\"div\");\r\n    progress.setAttribute(\"id\", \"progress\");\r\n    let played = document.createElement(\"div\");\r\n    played.setAttribute(\"id\", \"played\");\r\n    let non_played = document.createElement(\"div\")\r\n    non_played.setAttribute(\"id\", \"non_played\");\r\n    let bar = document.createElement(\"div\")\r\n    bar.setAttribute(\"id\", \"bar\");\r\n    bar.setAttribute(\"draggable\", true);\r\n    progress.appendChild(played);\r\n    progress.appendChild(bar);\r\n    progress.appendChild(non_played);\r\n\r\n\r\n    let play = document.createElement(\"button\");\r\n    play.setAttribute(\"id\", \"play\");\r\n    play.innerHTML = '<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-116\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z\" id=\"ytp-id-116\"></path></svg>'\r\n\r\n    let rate = document.createElement(\"button\");\r\n    rate.setAttribute(\"id\", \"rate\");\r\n\r\n    let video_window = document.createElement(\"button\");\r\n    video_window.setAttribute(\"id\", \"window\");\r\n    video_window.innerHTML = '<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-23\"></use><path d=\"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z\" fill=\"#fff\" id=\"ytp-id-23\"></path></svg>';\r\n\r\n\r\n\r\n    let fullscreen = document.createElement(\"button\");\r\n    fullscreen.setAttribute(\"id\", \"fullscreen\");\r\n    fullscreen.innerHTML='<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><g class=\"ytp-fullscreen-button-corner-0\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-27\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z\" id=\"ytp-id-27\"></path></g><g class=\"ytp-fullscreen-button-corner-1\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-28\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z\" id=\"ytp-id-28\"></path></g><g class=\"ytp-fullscreen-button-corner-2\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-29\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z\" id=\"ytp-id-29\"></path></g><g class=\"ytp-fullscreen-button-corner-3\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-30\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z\" id=\"ytp-id-30\"></path></g></svg>';\r\n\r\n\r\n    let time = document.createElement(\"p\");\r\n    time.setAttribute(\"id\", \"time\");\r\n\r\n    let volume = document.createElement(\"button\");\r\n    volume.innerHTML = '<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-17\"></use><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-18\"></use><defs><clipPath id=\"ytp-svg-volume-animation-mask\"><path d=\"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z\"></path><path d=\"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z\"></path><path class=\"ytp-svg-volume-animation-mover\" d=\"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z\" transform=\"translate(0, 0)\"></path></clipPath><clipPath id=\"ytp-svg-volume-animation-slash-mask\"><path class=\"ytp-svg-volume-animation-mover\" d=\"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z\" transform=\"translate(0, 0)\"></path></clipPath></defs><path class=\"ytp-svg-fill ytp-svg-volume-animation-speaker\" clip-path=\"url(#ytp-svg-volume-animation-mask)\" d=\"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z\" fill=\"#fff\" id=\"ytp-id-17\"></path><path class=\"ytp-svg-fill ytp-svg-volume-animation-hider\" clip-path=\"url(#ytp-svg-volume-animation-slash-mask)\" d=\"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z\" fill=\"#fff\" id=\"ytp-id-18\" style=\"display: none;\"></path></svg>';\r\n    volume.setAttribute(\"id\", \"volume\");\r\n    let div = document.createElement(\"div\");\r\n    div.setAttribute(\"id\", \"leng\");\r\n    let slider = document.createElement(\"div\");\r\n    slider.setAttribute(\"id\", \"slider\");\r\n    slider.setAttribute(\"draggable\", true);\r\n    let slid1 = document.createElement(\"div\");\r\n    slid1.setAttribute(\"id\", \"slid1\");\r\n    let slid2 = document.createElement(\"div\");\r\n    slid2.setAttribute(\"id\", \"slid2\");\r\n    div.appendChild(slid1);\r\n    div.appendChild(slider);\r\n    div.appendChild(slid2);\r\n    volume.appendChild(div);\r\n\r\n\r\n    let barrage = document.createElement(\"div\");\r\n    barrage.setAttribute(\"id\", \"barrage\");\r\n    let input = document.createElement(\"input\");\r\n    input.setAttribute(\"id\", \"input\");\r\n    let send = document.createElement(\"button\");\r\n    send.setAttribute(\"id\", \"send\");\r\n    send.innerHTML=\"发送弹幕\";\r\n    barrage.appendChild(input);\r\n    barrage.appendChild(send);\r\n    let barrage_switch = document.createElement(\"div\");\r\n    barrage_switch.setAttribute(\"id\", \"barrage_switch\");\r\n    barrage.appendChild(barrage_switch);\r\n    let circur = document.createElement(\"div\");\r\n    circur.setAttribute(\"id\", \"circur\");\r\n    barrage.appendChild(circur);\r\n\r\n    components = [progress, play, volume, time, barrage, fullscreen, video_window, rate];\r\n    for(let i = 0;i < components.length; i++){\r\n        control.appendChild(components[i])\r\n    }\r\n    return control;\r\n}\n\n//# sourceURL=webpack:///./app/public/construct.js?");

/***/ }),

/***/ "./app/public/data.js":
/*!****************************!*\
  !*** ./app/public/data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let data = {\r\n    \"WitcherS01E06\":\"/video/The.Witcher.S01E06.Rare.Species.1080p.NF.WEB-DL.DDP5.1.x264-NTG.mkv\",\r\n    \"WitcherS01E07\":\"/video/The.Witcher.S01E07.Before.a.Fall.1080p.NF.WEB-DL.DDP5.1.x264-NTG.mkv\",\r\n    \"WitcherS01E08\":\"/video/The.Witcher.S01E08.Much.More.1080p.NF.WEB-DL.DDP5.1.x264-NTG.mkv\",\r\n    \"小天大乱斗\":\"video/12.mp4\"\r\n}\r\n\r\nmodule.exports = exports = data;\n\n//# sourceURL=webpack:///./app/public/data.js?");

/***/ }),

/***/ "./app/public/keydown.js":
/*!*******************************!*\
  !*** ./app/public/keydown.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const video_time = __webpack_require__(/*! ../control/key_time */ \"./app/control/key_time.js\");\r\nconst video_volume = __webpack_require__(/*! ../control/key_volume */ \"./app/control/key_volume.js\");\r\nconst addBarrage = __webpack_require__(/*! ../barrage/barrage_send */ \"./app/barrage/barrage_send.js\");\r\n\r\n\r\nmodule.exports = function (player) {\r\n    player.onmouseover = function () {\r\n        document.addEventListener(\"keydown\", control)\r\n    };\r\n    player.onmouseout = function(){\r\n        document.removeEventListener(\"keydown\", control);\r\n    }\r\n};\r\n\r\nfunction control(evt) {\r\n    const player = document.querySelector(\"#player\");\r\n    const video = document.querySelector(\"video\");\r\n    let event = evt || window.event;\r\n    if (event.keyCode == 13) {\r\n        addBarrage(player);\r\n    }else if(event.keyCode == 37){\r\n        video_time(video, -5);\r\n    }else if(event.keyCode == 39){\r\n        video_time(video, 5);\r\n    }else if(event.keyCode == 38){\r\n        video_volume(video, 5);\r\n    }else if(event.keyCode == 40){\r\n        video_volume(video, -5);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/public/keydown.js?");

/***/ }),

/***/ "./app/public/play_list.js":
/*!*********************************!*\
  !*** ./app/public/play_list.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const data = __webpack_require__(/*! ./data */ \"./app/public/data.js\");\r\nconst removeElement = __webpack_require__(/*! ./remove_ele */ \"./app/public/remove_ele.js\");\r\nconst mediaPlayer = __webpack_require__(/*! ./class */ \"./app/public/class.js\");\r\n\r\n\r\nmodule.exports = function(){\r\n    let list = document.querySelector(\"#mulu\");\r\n    console.log(list);\r\n    for (let i in data){\r\n        let item = document.createElement(\"li\");\r\n        item.innerHTML = i;\r\n        item.onclick = function(){\r\n            removeElement(list);\r\n            mediaPlayer(document.body, data[i], \"1080px\", \"640px\", \"1\", true, true);\r\n        }\r\n        list.appendChild(item);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/public/play_list.js?");

/***/ }),

/***/ "./app/public/remove_ele.js":
/*!**********************************!*\
  !*** ./app/public/remove_ele.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(_element){\r\n    var _parentElement = _element.parentNode;\r\n    if(_parentElement){\r\n    _parentElement.removeChild(_element);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/public/remove_ele.js?");

/***/ }),

/***/ "./app/window/ToWindow.js":
/*!********************************!*\
  !*** ./app/window/ToWindow.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const resume = __webpack_require__(/*! ./resume */ \"./app/window/resume.js\");\r\n\r\n\r\nmodule.exports = function(player){\r\n    console.log(\"window\");\r\n    const control = document.querySelector(\".control\");\r\n    control.style.visibility = \"hidden\";\r\n    player.style.width = \"480px\";\r\n    player.style.height = \"320px\";\r\n    player.style.position = \"fixed\";\r\n    if(!player.style.bottom)\r\n        player.style.bottom = \"0\";\r\n    if(!player.style.right)\r\n        player.style.right = \"0\";\r\n    if(!document.querySelector(\"#shutdown\")){\r\n        let shutdown = document.createElement(\"button\");\r\n        shutdown.onmouseover = function(){\r\n            shutdown.style.opacity = \"0.5\";\r\n        }\r\n        shutdown.onmouseout = function(){\r\n            shutdown.style.opacity = \"0\";\r\n        }\r\n        shutdown.style.position = \"absolute\";\r\n        shutdown.style.top = \"0px\";\r\n        shutdown.style.left = \"0\";\r\n        shutdown.style.outline = \"none\";\r\n        shutdown.style.backgroundColor = \"rgba(255,255,255,0.4)\";\r\n        shutdown.style.width = \"30px\";\r\n        shutdown.style.height = \"30px\";\r\n        shutdown.style.padding = \"0\";\r\n        shutdown.style.border = \"0\";\r\n        shutdown.style.zIndex = \"100\";\r\n        shutdown.style.cursor = \"pointer\";\r\n        shutdown.style.opacity = \"0\";\r\n        shutdown.style.transition = \"0.3s\";\r\n        shutdown.innerHTML = \"X\";\r\n        shutdown.style.fontSize = \"20px\";\r\n        shutdown.setAttribute(\"id\", \"shutdown\");\r\n        shutdown.onclick = function(){\r\n            window.window_lock = false;\r\n            resume(player);\r\n            window.window_able = false;\r\n        }\r\n        player.appendChild(shutdown);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./app/window/ToWindow.js?");

/***/ }),

/***/ "./app/window/check_visible.js":
/*!*************************************!*\
  !*** ./app/window/check_visible.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ToWindow = __webpack_require__(/*! ./ToWindow */ \"./app/window/ToWindow.js\");\r\nconst resume = __webpack_require__(/*! ./resume */ \"./app/window/resume.js\");\r\nconst move = __webpack_require__(/*! ./move */ \"./app/window/move.js\");\r\n\r\n\r\nmodule.exports = function(player, clientHeight, clientTop){\r\n    if((clientTop + clientHeight < document.documentElement.scrollTop||clientTop - clientHeight > document.documentElement.scrollTop)&&window.window_able){\r\n        move(player, false);\r\n        ToWindow(player);\r\n    }else{\r\n        move(player, true);\r\n        resume(player);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./app/window/check_visible.js?");

/***/ }),

/***/ "./app/window/move.js":
/*!****************************!*\
  !*** ./app/window/move.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(player, remove){\r\n    let index = {\r\n        x : 0,\r\n        y : 0\r\n    };\r\n    console.log()\r\n    document.querySelector(\"#player\").ondrag = function move(event){\r\n        if(player.style.position === \"fixed\"){\r\n            let x;\r\n            if(index.x != 0&&event.clientX != 0)\r\n                x = event.clientX - index.x;\r\n            else\r\n                x = 0;\r\n            console.log(x);\r\n            let y;\r\n            if(index.y != 0&&event.clientY != 0)\r\n                y = event.clientY - index.y;\r\n            else\r\n                y = 0;\r\n            console.log(y);\r\n            player.style.bottom = (-y + parseInt(player.style.bottom)) + \"px\";\r\n            player.style.right = (-x + parseInt(player.style.right)) + \"px\";\r\n            index.x = event.clientX;\r\n            index.y = event.clientY;\r\n    }}\r\n}\r\n\r\n/*function move(event, index){\r\n    let x;\r\n    if(index.x != 0&&event.clientX != 0)\r\n        x = event.clientX - index.x;\r\n    else\r\n        x = 0;\r\n    console.log(x);\r\n    let y;\r\n    if(index.y != 0&&event.clientY != 0)\r\n        y = event.clientY - index.y;\r\n    else\r\n        y = 0;\r\n    console.log(y);\r\n    player.style.bottom = (y + parseInt(player.style.bottom)) + \"px\";\r\n    player.style.right = (x + parseInt(player.style.right)) + \"px\";\r\n    index.x = event.clientX;\r\n    index.y = event.clientY;\r\n}*/\n\n//# sourceURL=webpack:///./app/window/move.js?");

/***/ }),

/***/ "./app/window/resume.js":
/*!******************************!*\
  !*** ./app/window/resume.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const remove = __webpack_require__(/*! ../public/remove_ele */ \"./app/public/remove_ele.js\");\r\n\r\nmodule.exports = function(player){\r\n    if(!window.window_lock){\r\n        const control = document.querySelector(\".control\");\r\n        control.style.visibility = \"visible\";\r\n        player.style.width = \"1080px\";\r\n        player.style.height = \"640px\";\r\n        player.style.position = \"relative\";\r\n        player.style.bottom = \"0\";\r\n        player.style.right = \"0\";\r\n        if(document.querySelector(\"#shutdown\"))\r\n            remove(document.querySelector(\"#shutdown\"))\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/window/resume.js?");

/***/ }),

/***/ "./app/window/window_manager.js":
/*!**************************************!*\
  !*** ./app/window/window_manager.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const check_visible = __webpack_require__(/*! ./check_visible */ \"./app/window/check_visible.js\");\r\nconst ToWindow = __webpack_require__(/*! ./ToWindow */ \"./app/window/ToWindow.js\");\r\n\r\n\r\nmodule.exports = function(player){\r\n    window.window_able = true;\r\n    window.window_lock = false;\r\n    const clientHeight = parseInt(player.style.height);\r\n    const clientTop = OffTop(player);\r\n    console.log(clientHeight);\r\n    console.log(clientTop);\r\n    check_visible(player, clientHeight, clientTop);\r\n    document.body.addEventListener(\"wheel\",function(){\r\n        console.log(\"1\");\r\n        setTimeout(check_visible(player, clientHeight, clientTop), 100);\r\n    });\r\n    document.querySelector(\"#window\").onclick = function(){\r\n        window.window_able = true;\r\n        window.window_lock = true;\r\n        ToWindow(player);\r\n    }\r\n}\r\n\r\nfunction OffTop(element){\r\n    let top = 0;\r\n    while(element != document.body){\r\n        top += element.offsetTop;\r\n        element = element.parentNode;\r\n    }\r\n    return top;\r\n}\n\n//# sourceURL=webpack:///./app/window/window_manager.js?");

/***/ })

/******/ });