
var myArray = [
	"this is 0",
	"this is 0" + " my message",
	"This is not my message.",
	sendMessage(),
	sendMessage()
];

function sendMessage(){
	iRan = "oh no";
	iTrigger = "0";
	if(iRan === iRan){
		iRan = "alright";
		iTrigger = "10";
	}
	console.log("awd Did it go well?");
	return iRan + iTrigger;
}

if(false){
	for(i = 0; myArray.length > i ; i++ ){
		console.log(myArray[i]);
	}
}else{
	console.log(myArray[2]);
}
process.exit(0);