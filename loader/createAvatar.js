import avatar from './active.jpg';
export default function () {
	var img = new Image();
	img.src = avatar;
	img.classList.add('active-scss');
	document.getElementById('root').appendChild(img);
}