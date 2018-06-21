{
	let arr=['hello','world'];
	let map=arr[Symbol.iterator]();
	//console.log(arr[Symbol.iterator]);//ƒ values() { [native code] }  这里是一个函数
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
}



//自定义iterator借口
{
	let obj={
		start:[1,3,2],
		end:[7,9,8],
		[Symbol.iterator](){
			let self=this;
			let index=0;
			let arr=self.start.concat(self.end);
			let len=arr.length;
			return {
				next(){
					if(index<len){
						return{
							value:arr[index++],
							done:false
						}
					}else{
						return{
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}
	for(let key of obj){
			console.log(key);
		}

}