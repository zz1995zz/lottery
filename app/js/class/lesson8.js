{
	//简洁表示法
	let o=1;
	let k=2;
	let es5={
		o:o,
		k:k
	};
	let es6={
		o,
		k
	};
	console.log(es5,es6);


	let es5_method={
		hello:function(){
			console.log('hello');
		}
	};
	let es6_method={
		hello(){
			console.log('hello');
		}
	};
	es5_method.hello();
	es6_method.hello();
}


{
	//属性表达式[]
	let a='b';
	let es5_obj={
		a:'c',
		b:'c'
	}

	let es6_obj={
		[a]:'c',
		[a+a]:'c'
	}

	console.log(es5_obj,es6_obj);//{a: "c", b: "c"} {b: "c", bb: "c"}
}



{
	//is判断对象是否相等(与===功能相同)
	console.log('字符串',Object.is('abc','abc'),'abc'==='abc');//true true
	console.log('数组',Object.is([],[]),[]===[]);//false false  //注意：虽然两个都是空数组，但引用地址是不同的
}

{
	//拷贝(1.浅拷贝：只拷贝引用地址，不是把所以值拷贝过去  2.只拷贝自身属性，不拷贝继承的属性以及不可枚举的属性 )
	console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//{a: "a", b: "b"}  assign(拷贝的对象，被拷贝的对象)
}


{
	//对象属性遍历
	let test={k:123,o:456};
	for(let [key,value] of Object.entries(test)){
		console.log([key,value]);
	}
}