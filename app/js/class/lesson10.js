//数据类型set，可以理解为数组，但它的元素必须不同
{
	let list=new Set();
	list.add(5);
	list.add(7);

	console.log('size',list.size);//2  相当于数组的length

}

{
	let arr=[1,2,3,4,5];
	let list =new Set(arr);

	console.log('size',list.size);//5
}

{
	//每个元素不同，不能重复
	let list=new Set();
	list.add(1);
	list.add(2);
	list.add(1);//不会报错，只是不生效

	console.log('list',list);//{1, 2}


	//利用场景  去重
	let arr=[1,2,3,1,2];
	let list2=new Set(arr);

	console.log('unique',list2);//{1, 2, 3}

	//set不会进行数据类型的转换
	let arr1=[1,2,3,1,2,'2'];
	let list3=new Set(arr1);

	console.log('unique',list3);// {1, 2, 3, "2"}  这时候2和'2'是不同的
}

{
	//几个常用方法
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);

	console.log('has',list.has('add'));//true
	console.log('delete',list.delete('add'),list);//{"delete", "clear", "has"}
	console.log(list.clear(),list);//{}
}


{
	//遍历
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);

	for(let key of list.keys()){
		console.log('keys',key);
	}

	for(let value of list.values()){
		console.log('values',value);
	}

	for(let [key,value] of list.entries()){
		console.log('entries',key,value);
	}
	//这里keys()和values()都返回的值
	
	
	list.forEach(function(item){console.log(item)});
	
}


//注意：weakSet   1.元素只能是对象，不能是其它数据类型  2.对象都是弱引用，不会检测是否在其他地方是否用过，不是直接拷过来，是对地址的引用 3.没有set的一些属性和方法,例如：size 遍历
{	
	let weakList =new WeakSet();
	let arg={};

	weakList.add(arg);

	console.log('weakList',weakList);
}



{
	//map的key可以是任何数据类型
	let map=new Map();
	let arr=['123'];

	map.set(arr,456);
	console.log('map',map,map.get(arr));//{Array(1) => 456} 456
}

{
	let map =new Map([['a',123],['b',456]]);
	console.log('map args',map);//{"a" => 123, "b" => 456}

	console.log('size',map.size);//2
	console.log('delete',map.delete('a'),map);//{"b" => 456}
	console.log('clear',map.clear(),map);//{}
}

//遍历和set一样


{
	//WeakMap和Map区别与set和weakset一样
	//key必须是对象
	
	let weakmap=new WeakMap();

	let o={};
	weakmap.set(o,123);
	console.log(weakmap.get(o));
	
}



//优先考虑map，要求数据唯一性时用set，放弃使用数组和object！！！













{
	//map和数组 数据结构横向对比 增 查 改 删
	let map=new Map();
	let array=[];

	//增
	map.set('t',1);
	array.push({t:1});

	console.log('map-array',map,array);


	//查
	let map_exsit=map.has('t');
	let array_exsit=array.find(item=>item.t);

	console.log('map-arrray',map_exsit,array_exsit);


	//改
	map.set('t',2);
	array.forEach(item=>item.t?item.t=2:'');
    
    console.log('map-array-modify',map,array);


    //删
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    //let index=array.indexOf({t:1});  //这种也可以
    array.splice(index,1);
    console.log('map-array-empty',map,array);

}


{
	//set和数组 数据结构横向对比 增 查 改 删
	let set=new Set();
	let array=[];
	let o={t:1};

	//增
	set.add({t:1});
	array.push({t:1});

	console.log('set-array',set,array);


	//查
	let set_exsit=set.has({t:1});//false //解惑：这里的元素是个对象，与之前的{t:1}不是同一个对象是新建的，地址不同，要想返回true，前面的{t:1}先保存一下  let o={t:1} 然后这里has(o),这样就是同一个对象，同一个地址
	let array_exsit=array.find(item=>item.t);

	console.log('set-arrray',set_exsit,array_exsit);


	//改
	set.forEach(item=>item.t?item.t=2:'');
	array.forEach(item=>item.t?item.t=2:'');
    
    console.log('set-array-modify',set,array);


    //删
    set.forEach(item=>item.t?set.delete(item):'');
    //set.delete(o);//这种也可以
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('set-array-empty',set,array);
}






//map,set和Object的对比
{
	let item={t:1};
	let map=new Map();
	let set=new Set();
	let obj={};


	//增
	map.set('t',1);
	set.add(item);
	obj['t']=1;

	console.log('map-set-obj',map,set,obj);

	//查
	console.log({
		map_exsit:map.has('t'),
		set_exsit:set.has(item),
		obj_exsit:'t' in obj
	})

	//改
	map.set('t',2);
	item.t=2;
	obj['t']=2;
	console.log('map-set-obj-modify',obj,map,set);


	//删
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.log('map-set-obj-empty',obj,map,set);

}