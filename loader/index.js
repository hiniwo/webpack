import active from './active.jpg';
import avatar from './createAvatar';
import './index.css';
import style from  './index.scss';

avatar();

var root = document.getElementById('root');
var img = new Image();
img.src = active;
img.classList.add('active');

img.classList.add(style['active-scss']);

root.appendChild(img);
