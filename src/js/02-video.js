import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('iframe');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const vPlayer = new Player(playerEl);

onLoad();
vPlayer.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
	localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}

function onLoad(e) {
	const fetchedTime = localStorage.getItem(LOCALSTORAGE_KEY);
	if (LOCALSTORAGE_KEY) {
		vPlayer.setCurrentTime(fetchedTime);
	}
}
