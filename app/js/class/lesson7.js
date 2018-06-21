{
	function test(x,y="world"){
		console.log('默认值',x,y);
	}

	test('hello');//hello world
	test('hello','kill');//hello kill
	//注意：在有默认值的参数后面不能有没有默认值的参数
}


{
	let x='test';
	function test2(x,y=x){
		console.log('作用域',x,y);
	}
	test2('kill');//kill kill
	test2();//undefined undefined

	//function test2(c,y=x)
	test2('kill');//kill test
}


{
	//rest参数(可变参数，生成一个数组  注意：rest参数后不可有其他参数)
	function test3(...arg){
		for(let v of arg){
			console.log('rest',v);
		}
	}
	test3(1,2,3,4,5,'a');
}


{
	//扩展运算符(把数组转换为离散的值，是rest参数的一个逆过程)
	console.log('a',...[1,2,3,4]);
}



{
	//箭头函数
	let arrow=v=>v*2;
	let arrow2=()=>5;
	console.log('arrow',arrow(3));//6
	console.log('arrow2',arrow2());//5
}

{
	//尾调用(函数的最后一个语句调用一个函数)
	function tail(x){
		console.log('tail',x);
	}
	function fx(x){
		return tail(x);
	}
	fx(123);
}