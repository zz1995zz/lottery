{
	let readonly=function(targrt,name,descriptor){
		descriptor.writable=false;
		return descriptor
	};

	class Test{
		@readonly
		time(){
			return '2017-03-11';
		}
	}

	let test=new Test();

	console.log(test.time());
}



{
	let typename=function(target,name,descriptor){
		target.myname='hello';
	}

	@typename
	class Test{

	}


	console.log('类修饰符',Test.myname);
	//第三方库修饰器的js库：core-decorators; npm install core-decorators

}



//应用场景  
{
	let log=(type)=>{
		return function(target,name,descriptor){
			let src_method=descriptor.value;
			descriptor.value=(...arg)=>{
				src_method.apply(target,arg);//？？不是很理解
				console.log(`log ${type}`);
			}
		}
	}


	class AD{
		@log('show')

		show(){
			console.info(`ad is show`);
		}

        @log('click')
		click(){
			console.info(`ad is click`);
		}
	}


	let ad=new AD();
	ad.show();
	ad.click();
}