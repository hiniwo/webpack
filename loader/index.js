import active from './active.jpg';
import './index.css';
var root = document.getElementById('root');
var img = new Image();
img.src = active;
img.classList.add('active');
root.appendChild(img);
