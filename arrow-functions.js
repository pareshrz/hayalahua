var square = x => x*x;
console.log(square(9));

var user = {
	name : "Andrew",
	sayHi : function (){
		console.log(`Hi ${this.name}`);
	}
}
user.sayHi();