
console.log(123);
// import '@babel/polyfill';
const arr = [
	new Promise(() => {}),
	new Promise(() => {}),
	new Promise(() => {})
];

arr.map(item => {
	console.log(item);
});