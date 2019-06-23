
import './style01.css';
import './style.css';


// import {add} from './add';
// import _ from 'lodash'
// console.log(_.join(['Dell','Lee'], '__'));
// console.log(add(4,9));

// 点击页面，异步导入lodash模块
document.addEventListener('click', () => {
	getComponent().then((element) => {
		document.getElementById('root').appendChild(element)
	})
})

function getComponent () {
	return import(/* webpackChunkName: 'lodash' */'lodash').then(({ default: _ }) => {
		var element = document.createElement('div');
		element.innerHTML = _.join(['Dell', 'lee'], '——————')
		return element;
	})
}