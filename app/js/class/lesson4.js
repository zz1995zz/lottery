{
	console.log('a','\u0061');
	console.log('s','\u20BB7');
    //es5中对于大于0xFFFF的unicode编码不能识别，所以上一句识别为两个字符\u20BB和7
    //在es6中对编码加{}就可以识别
	console.log('s','\u{20BB7}');
}


{
	let s='𠮷';

	console.log('length',s.length);//length 2
	//'𠮷'的字节长度大于二，在处理长度时把它算作4个字节，所以就是两个字符长度
	
	//es5中用charAt和charCodeAt处理大于两个字节的字符会有问题
	console.log('0',s.charAt(0));
	console.log('1',s.charAt(1));
	console.log('at0',s.charCodeAt(0));
	console.log('at1',s.charCodeAt(1));


    //es6中处理大于两个字节的字符-codepointAt
	let s1='𠮷a';
	console.log('length',s1.length);//length 3
	console.log('code0',s1.codePointAt(0));
	console.log('code0',s1.codePointAt(0).toString(16));
	console.log('code1',s1.codePointAt(1));
	console.log('code2',s1.codePointAt(2));
	
}


{
	//es5
	console.log(String.fromCharCode("0x20bb7"));
	//es6
	console.log(String.fromCodePoint("0x20bb7"));
}

//es6新增的字符串查询接口
{
	let str='\u{20bb7}abc';
    //es5中的遍历查询
    for(let i=0;i<str.length;i++){
    	console.log('es5',str[i]);
    }

    //es6中的遍历查询
    for(let code of str){
    	console.log('es6',code);
    }
    
}


{
	let str="string";
	//判断是否包含某些字符
	console.log('includes',str.includes("r"));
	//判断是否以某些字符开始
	console.log('start',str.startsWith("str"));
	//判断是否以某些字符结束
	console.log('end',str.endsWith("str"));

}

{
	let str="abc";
	//复制字符串
	console.log(str.repeat(2));
}



//模板字符串
{
	let name="list";
	let info="hello world";
	let m=`i am ${name},${info}`;
	console.log(m);
}

//标签模板字符串
{
	let user={
		name:'list',
		info:'hello world'
	};
	console.log(abc`i am ${user.name},${user.info}`);
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}
}


//补白
{
	console.log('1'.padStart(2,'0'));
	console.log('1'.padEnd(2,'0'));
}

//对\进行转义，意思\变成\\
{
	console.log(String.raw`Hi\n${1+2}`);//Hi\n3
	console.log(`Hi\n${1+2}`);
	//Hi
	//3
}
