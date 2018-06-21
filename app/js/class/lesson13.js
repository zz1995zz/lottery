 {
 	//回调  基本定义
 	let ajax=function(callback){
 		console.log('执行');
 		setTimeout(function(){
 			callback&&callback.call()
 		},1000);
 	};

 	ajax(function(){
 		console.log('timeout1');
 	})
 }



 {
 	//promise基本使用
 	let ajax=function(){
 		console.log('执行2');
 		return new Promise(function(resolve,reject){
 			setTimeout(function(){
 				resolve()
 			},1000);
 		})
 	};

 	ajax().then(function(){
 		console.log('promise','timeout2');
 	})
 	
 }



 {
 	//多步骤
 	let ajax=function(){
 		console.log('执行3');
 		return new Promise(function(resolve,reject){
 			setTimeout(function(){
 				resolve()
 			},1000);
 		})
 	};

 	ajax()
 	  .then(function(){
 		return new Promise(function(resolve,reject){
 			setTimeout(function(){
 				resolve()
 			},2000);
 		});
 	})
 	  .then(function(){
 	  	console.log('timeout3');
 	  })
 }



 {
 	//catch捕捉错误
 	let ajax=function(num){
 		console.log('执行4');
 		return new Promise(function(resolve,reject){
 			if(num>5){
 				resolve()
 			}else{
 				throw new Error('出错了')
 			}
 		})
 	};


 	ajax(6).then(function(){
 		console.log('log',6);
 	}).catch(function(err){
 		console.log('catch',err);
 	});


 	ajax(3).then(function(){
 		console.log('log',3);
 	}).catch(function(err){
 		console.log('catch',err);
 	});

 }





 {
 	//应用 所有图片加载完之后再添加到页面
 	function loadImg(src){
 		return new Promise((resolve,reject)=>{
 			let img=document.createElement('img');
 			img.src=src;
 			img.onload=function(){
 				resolve(img);
 			}
 			img.onerror=function(err){
 				reject(err);
 			}
 		})
 	}

 	function showImgs(imgs){
 		imgs.forEach(function(img){
 			document.body.appendChild(img);
 		})
 	}


 	//promise.all方法  把多个promise实例合成一个新的promise实例，当多个实例都改变，promise.all新实例才改变
 	Promise.all([
 		loadImg('http://p1.ifengimg.com/a/2018_24/223f08b18eeb943.jpg'),
 		loadImg('http://p3.ifengimg.com/a/2018_24/83af5f61fe2c83d.jpg'),
 		loadImg('http://p0.ifengimg.com/a/2018_24/a08a60a199efbc7.jpg')
 		]).then(showImgs);
 }




 {
 	//应用 有一个图片加载完就添加到页面
 	function loadImg(src){
 		return new Promise((resolve,reject)=>{
 			let img=document.createElement('img');
 			img.src=src;
 			img.onload=function(){
 				resolve(img);
 			}
 			img.onerror=function(err){
 				reject(err);
 			}
 		})
 	}

 	function showImgs(img){
 		let p=document.createElement('p');
 		p.appendChild(img);
 		document.body.appendChild(p);
 	}

    
    //promise.race方法  多个实例有一个改变则promise.race新实例也改变(和promise.all相反)
 	Promise.race([
 		loadImg('http://p1.ifengimg.com/a/2018_24/223f08b18eeb943.jpg'),
 		loadImg('http://p3.ifengimg.com/a/2018_24/83af5f61fe2c83d.jpg'),
 		loadImg('http://p0.ifengimg.com/a/2018_24/a08a60a199efbc7.jpg')
 		]).then(showImgs);

 }