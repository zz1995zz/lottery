{
	//声明
	let a1=Symbol();
	let a2=Symbol();
	console.log(a1===a2);//false

	let a3=Symbol.for('a3');
	let a4=Symbol.for('a3');
	console.log(a3===a4);//true
}


//运用场景
{
	let a1=Symbol.for('abc');
	let obj={
		[a1]:'123',
		'abc':345,
		'c':456
	}
	console.log('obj',obj);

	//symbol声明的变量用for in和let of都遍历不到
	for(let [key,value] of Object.entries(obj)){
		console.log('let of',key,value);
		
	}
    
	//遍历取得symbol声明的属性,返回一个数组
	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(obj[item]);//123   
	})
	//疑问：为什么用obj.item是undefined
	//知识点普及：获取对象属性时.的后面接的是变量，所以属性名没有引号；而[]中间的是字符串，属性名有引号
	//这里返回的数组的元素都是字符串，多以用[]是可以的，用.是undefined

	
	//遍历取得所有的属性，返回一个数组
	Reflect.ownKeys(obj).forEach(function(item){
		console.log('ownKeys',item,obj[item]);
	})

	
}