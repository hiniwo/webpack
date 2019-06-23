

import './style.css'

var btn = document.createElement('button');

console.log(module.hot);

btn.innerHTML = '新增';

document.body.appendChild(btn);

btn.onclick = function() {
	
	var dom = document.createElement('div');
	
	dom.innerHTML = 'item';
	
	document.body.appendChild(dom);
};

// var root = document.getElementById('root');
//
// var dom = document.createElement('div');
//
// dom.innerText = '我是div里面的文字,添加npm run dev,你是谁，你好吗';
//
// root.appendChild(dom);