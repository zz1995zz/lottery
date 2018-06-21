{
	console.log(0b111110111);//503  二进制
	console.log(0o767);//503  八进制
}


{
	//判断数字是否有尽
	 console.log('15',Number.isFinite(15));//true
	 console.log('NaN',Number.isFinite(NaN));//false
	 console.log('1/0',Number.isFinite(1/0));//false

	 //判断是否不是数字
	 console.log('NaN',Number.isNaN(NaN));//true
	 console.log('0',Number.isNaN(0));//false


	 //判断是否是整数
	 console.log('25',Number.isInteger(25));//true
	 console.log('25.0',Number.isInteger(25.0));//true
	 console.log('25.1',Number.isInteger(25.1));//false
	 console.log('25',Number.isInteger('25'));//false  对于不是数字返回false
}


{
	//数字的上限和下限
	console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
	//判断数字是否是安全范围
	console.log('10',Number.isSafeInteger(10));//true
	console.log('a',Number.isSafeInteger('a'));//false
}


{
	//取得小数的整数部分
	console.log(4.1,Math.trunc(4.1));//4
	console.log(4.9,Math.trunc(4.9));//4
}


{
	//判断数字是正，负或0
	console.log('-5',Math.sign(-5));//-1
	console.log('5',Math.sign(5));//1
	console.log('0',Math.sign(0));//0
	console.log('5',Math.sign('5'));//1  不是数值时，会转换成数值，与前几个API不同
	console.log('foo',Math.sign('foo'));//NaN
}


{
	//立方根
	console.log('-1',Math.cbrt(-1));//-1
	console.log('8',Math.cbrt(8));//2
}