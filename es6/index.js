
console.log(123);
const arr = [
	new Promise(() => {}),
	new Promise(() => {}),
	new Promise(() => {})
];

arr.map(item => {
	console.log(item);
});