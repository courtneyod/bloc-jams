//forEach( array, functionBeingCalled )
function forEach(array, callback){
	for(var i =0; i< array.length; i++){
		//callback is a function that gets called from something happening
		callback(array[i]);
	}
}

//usually you would use:
//array.forEach(function(arrayElement){  // do a thing })