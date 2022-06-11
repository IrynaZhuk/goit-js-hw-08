import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
    'timeupdate',
    throttle(function (data) {
      localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
  );
  
  const data = localStorage.getItem('videoplayer-current-time') ?? 0;
  
  player.setCurrentTime(data);
