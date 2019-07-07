import axios from 'axios';

axios.get('/react/api/header.json').then((res) => {
	let {data,status} = res;
	console.log(data);
});

console.log('axios');