{
	//生成数组
	let arr=Array.of(3,4,7,9,11);
	console.log('arr=',arr);//[3,4,7,9,11]

	let empty=Array.of();
	console.log('empty',empty);//[]
}


{
	//转义成真正的数组
	let p=document.querySelectorAll('p');
	let pArr=Array.from(p);
	pArr.forEach(function(item){
		console.log(item.textContent);
	});


	//类似map，做映射，返回新数组
	console.log(Array.from([1,3,5],function(item){return item*2}));//[2,6,10]
	
}



{
	//填充替换
	console.log('fill-7',[1,'a',undefined].fill(7));//[7,7,7]
	console.log('fill,pos',['a','b','c'].fill(7,1,3))//['a',7,7]   fill(要填充的内容，起始位置，终止位置)
}



//遍历
{
	//返回位置编号
	for(let index of ['1','c','ks'].keys()){
		console.log('keys',index);
	}
	//返回对应值
	for(let value of ['1','c','ks'].values()){
		console.log('values',value);
	}
	//返回位置编号和对应值
	for(let [index,value] of ['1','c','ks'].entries()){
		console.log('entries',index,value);
	}
}


{
	//从数组的指定位置拷贝元素到数组的另一个指定位置中
	console.log([1,2,3,4,5].copyWithin(0,3,4));//[4, 2, 3, 4, 5]   copyWithin(复制到指定目标位置, 元素复制起始位置, 停止复制索引位置-不包括)
}

{
	//查找符合条件的元素(都是查到第一个符合条件的就停止查找)
	console.log([1,2,3,4,5,6].find(function(item){return item>3}));//4  返回元素值
	console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//3  返回索引位置

	//查找元素是否存在
	console.log('number',[1,2,NaN].includes(1));//true
	console.log('number',[1,2,NaN].includes(NaN));//true
}