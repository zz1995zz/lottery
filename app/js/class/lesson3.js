{
	//es5中两种正则表达式写法
	let regex=new RegExp('xyz','i');
	let regex2=new RegExp(/xyz/i);

	console.log(regex.test('xyz123'),regex2.test('xyz123'));//true,true


	//es6中新增的一种方式
	let regex3=new RegExp(/xyz/ig,'i');//后面的修饰符会覆盖前面的修饰符
	console.log(regex3.flags);//flags是es6新增的查找正则表达式的修饰符
}


//es6新增的全局匹配y修饰符
{
	let s='bbb_bb_b';
	let a1=/b+/g;
	let a2=/b+/y;

	console.log('one',a1.exec(s),a2.exec(s));//['bbb'] ['bbb']
    console.log('two',a1.exec(s),a2.exec(s));//['bb'] null

    //区别：g从上次匹配的位置之后任意位置开始匹配都行，而y必须从上次匹配完的下一个位置开始匹配，否则返回null
    //es6新增的检查是否开启y修饰符的属性
    console.log(a1.sticky,a2.sticky);//false true
}


//es6新增的u修饰符(含义为 "Unicode模式"，用来正确处理大于 \uFFFF 的Unicode字符。也就是说，会正确处理四个字节的 UTF-16 编码)
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//true
    console.log('u-1',/^\uD83D/u.test('\uD83D\uDC2A'));//false

    console.log(/\u{61}/.test('a'));//false
    console.log(/\u{61}/u.test('a'));//true

    console.log('\u{20BB7}');//𠮷

    let s='𠮷';

    console.log('u',/^.$/.test(s));//false
    console.log('u-2',/^.$/u.test(s));//true

    console.log('test',/𠮷{2}/.test('𠮷𠮷'));//false
    console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));//true

    //使用u修饰符的情况：1.处理的正则表达式中含有大于两个字节的字符时；
    //2.'.'并不是能匹配到所有字符，当字符的字节大于两个字节时就不行，加上u
    //3.当用\u{}这种大括号表示字符时要加u，不然正则表达式就不能表达到想要表达的字符
    //4.使用 u 修饰符后，所有量词都会正确识别码点大于 oxFFFF 的Unicode 字符。(第3点也属于这里)
}