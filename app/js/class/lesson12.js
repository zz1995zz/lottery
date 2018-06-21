{
	//基本定义和实例
	class Parent{
		constructor(name='zhangzhen'){
			this.name=name;
		}
	}
	let v_parent=new Parent('v');
	console.log('构造函数和实例',v_parent);
}


{   
	//继承
	class Parent{
		constructor(name='zhangzhen'){
			this.name=name;
		}
	}

	class Child extends Parent{


	}

	console.log('继承',new Child());
}


{   
	//继承传递参数
	class Parent{
		constructor(name='zhangzhen'){
			this.name=name;
		}
	}

	class Child extends Parent{
		constructor(name='child'){
			super(name);//用来子类像父类传递参数 什么都不写就用父类的
			this.type='child';//子类字迹定义参数一定放在super后，也就是说super放在第一行
		}

	}

	console.log('继承',new Child());
}



{
	//getter setter
	class Parent{
		constructor(name='zhangzhen'){
			this.name=name;
		}
        
        //注意这里不是方法，虽然和方法的形式一样，但这里是属性！！！
		get longName(){
			return 'mk'+this.name;
		}

		set longName(value){
			this.name=value;
		}
	}

	let v=new Parent();
	console.log('getter',v.longName);//mkzhangzhen    看见没！这里就是属性的写法,longName就是属性
	v.longName='hello';
	console.log('setter',v.longName);//mkhello
}



{   
	//静态方法(通过类去调用，而不是类的实例去调用)
	class Parent{
		constructor(name='zhangzhen'){
			this.name=name;
		}
	

    static tell(){
		console.log('tell');
	}
  }


  Parent.tell();//tell
}




{   

	//静态属性
	class Parent{
		constructor(name='zhangzhen'){
			this.name=name;
		}


	static tell(){
		console.log('tell');
	}

  }

    Parent.type='test';//静态属性  类定义完后直接在类上定义

    console.log('静态属性',Parent.type);
   
}