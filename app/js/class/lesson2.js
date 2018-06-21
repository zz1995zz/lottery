
//数组解构赋值

{
	let a,b,rest;
	[a,b]=[1,2];
	console.log(a,b);
}

{
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest);
}

{
	let a,b;
	({a,b}={a:1,b:2})
	console.log(a,b);
}

{
	let a,b,c,rest;
	[a,b,c=3]=[1,2];
	console.log(a,b,c);
}



//应用场景
//变量交换
{
	let a=1;
	let b=2;
	[a,b]=[b,a];
	console.log(a,b);
}

//返回例如购物数量a和金额b
{
	function f(){
		return [1,2]
	}
	let a,b;
	[a,b]=f();
	console.log(a,b);
}

//选择性接收返回值
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,b]=f();
	console.log(a,b);//1,4
}

//不知道返回值长度，只关心第一个返回值
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b;
	[a,...b]=f();
	console.log(a,b);//1,[2,3,4,5]
}

//上面两种可以混合使用
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b;
	[a,,...b]=f();
	console.log(a,b);//1,[3,4,5]
}




//对象解构赋值

{
	let o={p:42,q:true};
	let {p,q}=o;
	console.log(p,q);
}

//设置默认值
{
	let {a=10,b=5}={a:3};
	console.log(a,b);//3,5
}


//应用场景
//嵌套的对象和数组
{
	let metaData={
		title:'abc',
		test:[{
			title:'test',
			desc:'description'
		}]
	}
	let {title:esTitle,test:[{title:cnTitle}]}=metaData;
	console.log(esTitle,cnTitle);
}

