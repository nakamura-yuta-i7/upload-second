var TestClass = function() {
	this.name = "nakamura";
}
TestClass.prototype.func01 = function() {
	name = "yuta";
	return this.name;
}
TestClass.prototype.func02 = function() {
	return name;
}

var TestClass = new TestClass();
console.log( TestClass.func01() );
console.log( TestClass.func02() );
