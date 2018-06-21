{
	let obj={
		time:'2017-03-11',
		name:'net',
		_r:123
	};

	let monitor=new Proxy(obj,{
		//拦截对象属性的读取
		get(target,key){
			return target[key].replace('2017','2018')
		},

		//拦截对象设置属性
		set(target,key,value){
			if(key==='name'){
				return target[key]=value;
			}else{
				return target[key];
			}
		},

		//拦截key in object操作
		has(target,key){
			if(key==='name'){
				return target[key];
			}else{
				return false;
			}
		},

		//拦截delete
		deleteProperty(target,key){
			if(key.indexOf('_')>-1){
				return delete target[key];
				//return true;//为什么一定要有这个语句???
				//解释：对象代理的所有方法里面必须要有return语句，如果前面写的delete target[key];，那后面就得加上一个return true或者return false语句
			}else{
				return target[key];
			}
		},

		//拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
		ownKeys(target){
			return Object.keys(target).filter(item=>item!='time');
		}
	});

	console.log('get',monitor.time);// 2018-03-11

	monitor.time='2018';
	monitor.name='zhangzhen';
	console.log('set',monitor.time,monitor);//疑问：为什么monitor里面的time还是2017？？

	console.log('has','name' in monitor,'time' in monitor);//true false


	//delete monitor.time;
	//delete monitor._r;
	//console.log('delete',monitor);//{time: "2017-03-11", name: "zhangzhen"}
	
    console.log('ownKeys',Object.keys(monitor));// ["name", "_r"]
}








//Reflect  功能和Proxy一样，但是操作简单很多
{
	let obj={
		time:'2017-03-11',
		name:'net',
		_r:123
	};


	console.log('Reflect get',Reflect.get(obj,'time'));
	Reflect.set(obj,'name','zhangzhen');
	console.log(obj);
	console.log('has',Reflect.has(obj,'name'));

}







//运用Proxy和Reflect


//业务解耦校验模块(数据校验)
{
	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va=this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy)
					}else{
						throw Error(`不能设置${key}到${value}`)
					}
				}else{
					throw Error(`${key} 不存在`)
				}
			}
		})
	}


	const personValidators={
		name(val){
			return  typeof val==='string'
		},
		age(val){
			return typeof val==='number'&&val>18
		}
	}


	class Person{
		constructor(name,age){
			this.name=name;
			this.age=age;
			return validator(this,personValidators)
		}
	}

	const person=new Person('lilei',30);

	console.info(person);

	person.name=48;



}