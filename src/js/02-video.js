import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on('timeupdate', throttle(function (time) {
    localStorage.setItem("videoplayer-current-time", time.seconds)   
}), 1000);

const getItem = localStorage.getItem("videoplayer-current-time");

if (getItem === null) {
    return;
} else {   
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")) 
};



