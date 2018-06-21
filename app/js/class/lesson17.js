/*
export let A=123;

export function test(){
	console.log('test');
}

export class Hello{
	test(){
		console.log('class');
	}
}
*/

//把起名字的权利交给引入方
let A=123;
let test=function(){
	console.log('test');
}
class Hello{
	test(){
		console.log('class');
	}
}


export default{
	A,
	test,
	Hello
}

