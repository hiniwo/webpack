// 工厂模式

class Product{
	constructor(name){
		this.name = name
	}
	
	init(name){
		this.name = name;
	}
	
	play(){
		console.log('play');
	}
	
	fly(){
		cosole.log('fly');
	}
}


class Creator {
	
	create(name){
		return new Product(name)
	}
	
}

var obj = new Creator();

obj.create('123');

obj.play();

obj.fly();



