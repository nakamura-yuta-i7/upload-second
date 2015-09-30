/**
 * Singleton Class.
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

Singleton.prototype.func1 = function() {
	console.log("called func1");
}

Singleton.getInstance().func1();
