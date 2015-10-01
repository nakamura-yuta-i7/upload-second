/**
 * Singleton Class.
 * see: http://d.hatena.ne.jp/R-H/20111107/1320620774
 */
var Singleton = (function() {
	var _fromGetInstance = false;
	var _instance;
	function _construct() {
		if (_fromGetInstance !== true) {
			throw new Error("must use the getInstance.");
		}
		_fromGetInstance = false;
	}
	_construct.getInstance = function() {
		if (_instance) {
			return _instance;
		}
		_fromGetInstance = true;
		return _instance = new this();
	}
	return _construct;
})();

Singleton.prototype.method1 = function() {
	console.log( "Singleton.method1" );
	console.log( this.name );
}

// goog.inherits
// see: http://www.yunabe.jp/docs/javascript_class_in_google.html#inherits-
var inherits = function(childCtor, parentCtor) {
	/** @constructor */
	function tempCtor() {};
	tempCtor.prototype = parentCtor.prototype;
	childCtor.superClass_ = parentCtor.prototype;
	childCtor.prototype = new tempCtor();
	/** @override */
	childCtor.prototype.constructor = childCtor;
};

// var Parent = function(arg) {
// 	// Parent のコンストラクタ実装
// };
// 
// Parent.prototype.method0 = function() {
// 	console.log('Parent.method0');
// }
// 
// var Child = function(arg) {
// 	// Child のコンストラクタの実装
// };
// 
// inherits(Child, Parent);

var Parent = function() {
	this.name = "nakamuraParent";
}
Parent.prototype.name_2 = "yuta2";
Parent.prototype.method0 = function() {
	console.log( "Parent.prototype.method0: " + this.name );
}

function Child() {
	this.name = "nakamuraChild";
}
inherits(Child, Parent);

Child.prototype.method1 = function() {
	console.log( "Child.prototype.method1: " + this.name );
}
Child.prototype.method2 = function() {
	console.log( "Child.prototype.method2: " + this.name_2 );
}

var child = new Child();
child.name = "nakamura";
child.method1();

var child = new Child();
child.method1();
child.method2();

var child = new Child();
child.method0();

var child = Singleton.getInstance();
child.name = "yuta";
child.method1();

var child = Singleton.getInstance();
child.method1();
