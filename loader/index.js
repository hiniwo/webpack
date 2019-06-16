import active from './active.jpg';
import './index.css';
import './index.scss';


var root = document.getElementById('root');
var img = new Image();
img.src = active;
img.classList.add('active');

img.classList.add('active-scss');

root.appendChild(img);
